$(function() {
    $(".expand").on( "click", function() {
        // $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});
new Clipboard('.copy');
$('.copy').popover().click(function () {
    setTimeout(function () {
        $('.copy').popover('hide');
    }, 2000);
});