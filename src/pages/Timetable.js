import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TimetableComponent from './TimetableComponent';

const Timetable = () => {
  return (
    <div className='container'>
        <h1>Timetable 5IA21d:</h1>
        <TimetableComponent subject="M231" startTime='7:35' endTime='9:10' teacher='Max Mustermann' />
        <TimetableComponent subject="Sport" startTime='7:35' endTime='9:10' teacher='Maxine Mustermann' />
    </div>
  )
}

export default Timetable;