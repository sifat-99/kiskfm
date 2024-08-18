import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/Calender.css'// You will need to create this CSS file to style the calendar

export function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-container ">
      <Calendar
        value={value}
        className="dark-calendar "
        locale="en-US" 
      />
    </div>
  );
}
