$(function(){
    $('.pie_progress_basic').asPieProgress({
        barcolor: '#000',
        trackcolor: '#00f'
    });
    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        barcolor: '#000',
        trackcolor: '#00f'
    });
// Example with grater loading time - loads longer
    $('.pie_progress--slow').asPieProgress({
        namespace: 'pie_progress',
        barcolor: '#000',
        trackcolor: '#00f',
        goal: 1000,
        min: 0,
        max: 1000,
        speed: 200,
        easing: 'linear'
    });
// Example with grater loading time - loads longer
    $('.pie_progress--countdown').asPieProgress({
        namespace: 'pie_progress',
        barcolor: '#000',
        trackcolor: '#00f',
        easing: 'linear',
        first: 120,
        max: 120,
        goal: 0,
        speed: 1200, // 120 s * 1000 ms per s / 100
        numberCallback: function(n) {
            var minutes = Math.floor(this.now / 60);
            var seconds = this.now % 60;
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            return minutes + ': ' + seconds;
        }
    });
    $('#button_start').on('click', function() {
        $('.pie_progress').asPieProgress('start');
    });
    $('#button_finish').on('click', function() {
        $('.pie_progress').asPieProgress('finish');
    });
    $('#button_go').on('click', function() {
        $('.pie_progress').asPieProgress('go', 50);
    });
    $('#button_go_percentage').on('click', function() {
        $('.pie_progress').asPieProgress('go', '50%');
    });
    $('#button_stop').on('click', function() {
        $('.pie_progress').asPieProgress('stop');
    });
    $('#button_reset').on('click', function() {
        $('.pie_progress').asPieProgress('reset');
    });
});