
var data = [[0, 11],[1, 15],[2, 25],[3, 24],[4, 13],[5, 18]];
var dataset = [{ data: data, color: "#5482FF" }];
var ticks = [[0, "London"], [1, "New York"], [2, "New Delhi"], [3, "Taipei"],[4, "Beijing"], [5, "Sydney"]];

var options = {
    series: {
        bars: {
            show: true,
            shadowSize: 0,
            barWidth: 0.5,
            align: "center",
            lineWidth: 0,
            fill:.75
        }
    },
    xaxis: {
        axisLabel: "World Cities",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelPadding: 15,
        ticks: ticks,
        tickColor: "transparent"
    },
    yaxis: {
        axisLabel: "Average Temperature",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelPadding: 15,
        tickColor: "#efefef",
        tickFormatter: function (v, axis) {
            return v + "°C";
        }
    },
    legend: {
        show: false
    },
    grid: {
        hoverable: true,
        clickable: false,
        mouseActiveRadius: 30,
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: null
    }
};

$(document).ready(function () {
    $.plot($("#flotBarChat"), dataset, options);
});