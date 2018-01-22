var table;
var socket;

$(document).ready(function () {
    table = $('#chrono').DataTable();

    socket = io.connect('http://localhost:8080');
    socket.on('init', function (data) {
        addRows(data);
    });

    socket.on('realtime', function (data) {
        addRows([data]);
    });
});

var addRows = function (rows) {
    rows.forEach(function (value, index) {
        table.row.add([
                value.id,
                value.pilote,
                value.tour,
                value.temps
            ]
        ).draw(false);
    })

};