$(document).ready(function() {
    let $Table = $("#Table > tbody");
    $.getJSON("rolls.json", function(data) {
        $.each(data, function(index, value) {
            var tRow = "<tr><td>" + value.name + "</td><td>" + value.roll + "</td><td>" + value.luck + "</td></tr>";
            $Table.append(tRow);
        });
        $('#Table').DataTable({
            pageLength: 8,
            lengthMenu: [
                [8, 10, 20, -1],
                [8, 10, 20, 100]
            ]
        });
    });

});