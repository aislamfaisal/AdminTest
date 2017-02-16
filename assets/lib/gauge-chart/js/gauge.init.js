$(function(){
    var opts = {
        pointer: {
            strokeWidth: 0, // The thickness
            color: 'transparent' // Fill color
        },
        limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#00f',   // Colors
        colorStop: '#00f',    // just experiment with them
        strokeColor: '#eee',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true     // High resolution support
    };

    var gaugeOneChart = document.getElementById('gaugeOne');
    var gaugeOne = new Donut(gaugeOneChart).setOptions(opts);
    gaugeOne.maxValue = 100;
    gaugeOne.set(85);

    var gaugeTwoChart = document.getElementById('gaugeTwo');
    var gaugeTwo = new Gauge(gaugeTwoChart).setOptions(opts);
    gaugeTwo.maxValue = 100;
    gaugeTwo.set(25);
});
