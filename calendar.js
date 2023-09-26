

      document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridDay',
    initialDate: '2023-10-27',
    headerToolbar: {
      left: 'prev,next',
      right: 'title',
      
    },
    events: [
      {
        title: 'Design Camp® Day 1',
        start: '2023-10-27'
      },
      {
        title: 'Design Camp® Day 2',
        start: '2023-10-28'
      },
      {
        title: 'Design Camp® Day 3',
        start: '2023-10-29'
      },
      {
        title: 'Registration',
        start: '2023-10-27T10:00:00',
        end: '2023-10-27T12:00:00'
      },
      {
        title: 'Lunch',
        start: '2023-10-27T11:45:00',
        end: '2023-10-27T13:00:00'
      },
      {
        title: 'Break',
        start: '2023-10-27T13:00:00',
        end: '2023-10-27T13:15:00'
      },
      {
        title: 'Welcome',
        start: '2023-10-27T13:15:00',
        end: '2023-10-27T13:30:00'
      },
      {
        title: 'Speaker 1',
        start: '2023-10-27T13:30:00',
        end: '2023-10-27T15:00:00'
      },
      {
        title: 'Q&A & Raffle',
        start: '2023-10-27T14:25:00',
        end: '2023-10-27T15:00:00'
      },
      {
        title: 'Plaidurday Photo',
        start: '2023-10-27T14:45:00',
        end: '2023-10-27T15:00:00'
      },
      {
        title: 'Guest Check-In',
        start: '2023-10-27T15:00:00',
        end: '2023-10-27T16:45:00'
      },
      {
        title: 'Workshop 1',
        start: '2023-10-27T15:15:00',
        end: '2023-10-27T16:15:00'
      },
      {
        title: 'Cocktails With Creatives',
        start: '2023-10-27T16:45:00',
        end: '2023-10-27T18:15:00'
      },
      {
        title: 'Progressive Dinner',
        start: '2023-10-27T18:15:00',
        end: '2023-10-27T20:00:00'
      },
      {
        title: 'Plaid Ball 🪩',
        start: '2023-10-27T20:00:00',
        end: '2023-10-27T22:00:00'
      },
      {
        title: 'Karaoke / Bonfire',
        start: '2023-10-27T22:00:00',
        end: '2023-10-27T24:00:00'
      },
    ]
  });

  calendar.render();
});

