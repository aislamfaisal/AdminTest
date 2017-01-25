$(document).ready(function() {

    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        droppable: true,
        editable: true,
        selectable: true,
        //header and other values
        select: function(start, end, allDay) {
            var starttime=moment(start).format('YYYY-MM-DDTHH:mm:ssZ');
            var endtime=moment(end).format('YYYY-MM-DDTHH:mm:ssZ');
            var mywhen = starttime + ' - ' + endtime;
            $('#createEventModal #apptStartTime').val(start);
            $('#createEventModal #apptEndTime').val(end);
            $('#createEventModal #apptAllDay').val(allDay);
            $('#createEventModal #when').text(mywhen);
            $('#createEventModal').modal('show');
        }
    });

    $('#submitButton').on('click', function(e){
        // We don't want this to act as a link so cancel the link action
        e.preventDefault();

        doSubmit();
    });

    function doSubmit(){
        $("#createEventModal").modal('hide');
        console.log($('#apptStartTime').val());
        console.log($('#apptEndTime').val());
        console.log($('#apptAllDay').val());
        alert("form submitted");

        $("#calendar").fullCalendar('renderEvent',
            {
                title: $('#patientName').val(),
                start: new Date($('#apptStartTime').val()),
                end: new Date($('#apptEndTime').val()),
                allDay: ($('#apptAllDay').val() == "true"),
            },
            true);
    }
});


$(document).ready(function() {


    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events .fc-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        dragRevertDuration: 0,
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventDragStop: function( event, jsEvent, ui, view ) {

            if(isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
                $('#calendar').fullCalendar('removeEvents', event._id);
                var el = $( "<div class='fc-event'>" ).appendTo( '#external-events-listing' ).text( event.title );
                el.draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0
                });
                el.data('event', { title: event.title, id :event.id, stick: true });
            }
        }
    });


    var isEventOverDiv = function(x, y) {

        var external_events = $( '#external-events' );
        var offset = external_events.offset();
        offset.right = external_events.width() + offset.left;
        offset.bottom = external_events.height() + offset.top;

        // Compare
        if (x >= offset.left
            && y >= offset.top
            && x <= offset.right
            && y <= offset .bottom) { return true; }
        return false;

    }


});