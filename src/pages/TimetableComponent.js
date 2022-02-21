import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';

const TimetableComponent = (props) => {
  return (
    <div className='container'>
        <div id='post'>
          <div id='timetableTitle'>
            <p>{props.subject}</p>
          </div>
          <div className='textSideBySide'>
            <div id='time'>
              <p>{props.startTime}</p>
              <p>{props.endTime}</p>
            </div>
            <div id='teacher'>
              <p>{props.teacher}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TimetableComponent;