import './index.scss';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from '../../utils/loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const locales = {
  "en-US": require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Spinach',
    allDay: true,
    start: new Date(2022, 4, 1),
    end: new Date(2022, 4, 2),
  },
  {
    title: 'Eggplant',
    start: new Date(2022, 4, 7),
    end: new Date(2022, 4, 10),
  },
  {
    title: 'Carrots',
    start: new Date(2022, 4, 9),
    end: new Date(2022, 4, 10),
  },
]

const MyCalendar= ()=> {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }


  return (
    
      <div className="calendarImage" id='imageCal'>
        <header className='headerCal'>
          <h1>Calendar</h1>
          <h2>Add New Event</h2>
        </header>
        <div className='inputCal'>
          <div>
            <input 
            type="text" placeholder="Title" value={newEvent.title} onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})}
            />
            <DatePicker className="start-date" placehoderText="Start Date"
            selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
            />  
            <DatePicker className="end-date" placehoderText="End Date"
            selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
            />
            <button className="add-event" onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>

        <Calendar 
        localizer={localizer} 
        events={allEvents} 
        startAccessor="start" 
        endAccessor="end" 
        className="calendar-element"
        />
      </div>
  )
}

export default withAuthenticationRequired(MyCalendar, { onRedirecting: () => <Loading /> });