var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('chrono');

var lastIndex = null;

server.listen(8080);

app.use(express.static('assets'));
app.use(express.static('node_modules'));


//Declare root path
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//When client connect
io.on('connection', function (socket) {
    db.all("SELECT id, pilote, tour, temps FROM timer", function (err, rows) {
        socket.emit('init', rows);
    });
});

//Each 1s, send new time
db.each("SELECT max(id) as maxId FROM timer", [], function (err, row) {
    lastIndex = row.maxId;
}, function () {
    console.log("start");
    setInterval(function() {
        db.each("SELECT id, pilote, tour, temps FROM timer WHERE id > ? ORDER BY id", [lastIndex], function (err, row) {
            lastIndex = row.id;
            io.emit('realtime', row);
        });
    }, 1000);
})
;

