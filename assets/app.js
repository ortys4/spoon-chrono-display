var table;
var socket;

$(document).ready(function () {
    table = $('#chrono').DataTable({
        "order": [[ 1, "desc" ],[ 0, "asc" ]],
        "lengthMenu": [[-1], ["All"]],
        "dom": '<"wrapper"flip>t'
    });

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
                value.pilote,
                value.tour,
                value.temps
            ]
        ).draw(false);
    })

};