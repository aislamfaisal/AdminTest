var months = [[1,"Jan"], [2,"Mar"], [3,"May"], [4,"Jul"], [5,"Sep"], [6,"Nov"]];
var data_line = [
    [1, 0], [2, 500], [3, 350],[4, 750], [5, 600], [6, 900]
];

$.fn.UseTooltip = function () {
    var previousPoint = null;

    $(this).bind("plothover", function (event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();

                var x = item.datapoint[0];
                var y = item.datapoint[1];

                showTooltip(item.pageX, item.pageY,
                    months[x-  1] + "<br/>" + "<strong>" + y + "</strong> (" + item.series.label + ")");
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
};

function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y + 5,
        left: x + 20,
        border: '1px solid #f7f7f7',
        padding: '5px 10px',
        size: '10',
        'background-color': '#fff',
        opacity: 0.80
    }).appendTo("body").fadeIn(200);
}


$(function () {
    $.plot($("#flotLineChart"),
        [{
            data: data_line,
            label: "Page View",
            points: {
                show: false
            },
            color: "#00f",
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: { colors: [{ opacity: 0.7 }, { opacity: 0.1}] }
            }
        }
        ],{
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: false,
                mouseActiveRadius: 30,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 10
            },
            xaxis:{
                ticks: months,
                tickColor: "transparent"
            },
            yaxis:{
                tickColor: "#efefef"
            }
        }
    );

    $("#flotLineChart").UseTooltip();
});