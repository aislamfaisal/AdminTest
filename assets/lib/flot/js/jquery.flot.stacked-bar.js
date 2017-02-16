$(function () {
    var data1 = {
        data: [
            [1, 3],
            [2, 3],
            [4, 3],
            [4, 3],
            [5, 3]
        ],
        color: "red"
    };
    var data2 = {
        data: [
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 4]
        ],
        color: "blue"
    };
    var data3 = {
        data: [
            [1, 3],
            [2, 3],
            [3, 3],
            [4, 3],
            [5, 3]
        ],
        color: "green"
    };
    var dataset = [overdue, open, completed];

    var options = {
        series: {
            stack: true,
            bars: {
                show: true

            }
        },
        bars: {
            align: "center",
            horizontal: true,
            barWidth: .5,
            lineWidth: 0
        },
        grid: {
            hoverable: false,
            clickable: false,
            mouseActiveRadius: 30,
            backgroundColor: "transparent",
            borderWidth: 0,
            borderColor: null
        },
        yaxis: {
            tickColor: "transparent"
        },
        xaxis: {
            tickColor: "#efefef",
            ticks: [
                [1, "January"],
                [2, "March"],
                [3, "May"],
                [4, "July"],
                [5, "September"]
            ]
        },
        legend: {
            show: false
        }
    };

    $.plot($("#flotStackBarChat"), dataset, options);
});