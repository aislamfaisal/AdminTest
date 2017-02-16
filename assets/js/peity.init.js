// Pie Chart
$("span.blue-pie").peity('pie', {
    delimiter: null,
    fill: ["#ff9900", "#fff4dd", "#ffd592"],
    height: null,
    radius: 8,
    width: null
});

// Donut Chart
$("span.blue-donut").peity('donut', {
    delimiter: null,
    fill: ["#ff9900", "#fff4dd", "#ffd592"],
    height: null,
    radius: 8,
    innerRadius: 5,
    width: null
});

// Line Chart
$("span.blue-line").peity('line', {
    height: 25,
    width: 50,
    fill: ["rgba(0,0,255,0.1)"],
    stroke: ["rgba(0,0,255,0.3)"]
});

// Bar Chart
$("span.blue-bar").peity('bar', {
    height: 25,
    width: 50,
    padding: 0.1,
    fill: ["rgba(0,0,255,0.5)", "rgba(0,0,255,0.9)"],
    stroke: ["rgba(0,0,255,0.3)"]
});

// Dynamic Chart

var updatingChart = $(".blue-updating").peity("line", {
    width: 150,
    fill: ["rgba(0,0,255,0.1)"],
    stroke: ["rgba(0,0,255,0.3)"]
});
setInterval(function() {
    var random = Math.round(Math.random() * 10);
    var values = updatingChart.text().split(",");
    values.shift();
    values.push(random);

    updatingChart
        .text(values.join(","))
        .change()
}, 1000);