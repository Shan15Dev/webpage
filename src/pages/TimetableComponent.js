import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';

const TimetableComponent = (props) => {
  return (
    <div className='container'>
        <div id='post'>
          <div id='timetableTitle'>
            <h3>{props.subject}</h3>
          </div>
            <div id='time'>
              <p>{props.startTime}</p>
              <p>{props.endTime}</p>
            </div>
        </div>
    </div>
  )
}

export default TimetableComponent