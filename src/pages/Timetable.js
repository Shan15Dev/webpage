import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TimetableComponent from './TimetableComponent';

const Timetable = () => {
  return (
    <div className='container'>
        <h1>Timetable for the 5IA21d class:</h1>
        <TimetableComponent subject="M231" startTime='7:35' endTime='8:20'/>
    </div>
  )
}

export default Timetable;