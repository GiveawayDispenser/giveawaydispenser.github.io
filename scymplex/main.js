$(document).ready(function() {
    let $Table = $("#Table > tbody");
    $.getJSON("rolls.json", function(data) {
        $.each(data, function(index, value) {
            var tRow = "<tr><td>" + value.name + "</td><td>" + value.roll + "</td><td>" + value.pity + "</td></tr>";
            $Table.append(tRow);
        });
        $('#Table').DataTable({
            order: [[ 1, "desc" ]],
            pageLength: 8,
            lengthMenu: [
                [8, 10, 20, -1],
                [8, 10, 20, 100]
            ]
        });
    });

});
