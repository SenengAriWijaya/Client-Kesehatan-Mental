import React from 'react';
import CardSensor from '../Elements/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faBrain, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div className="flex-1 sm:mx-20 pt-5">
       {/* <div className='container mx-auto h-12 bg-cyan-800 flex items-center justify-center border-gray-200 rounded-md shadow mb-4 w-full '> */}
        <h1 className="text-2xl font-bold text-center text-cyan-800 mb-5">DASHBOARD</h1>
      {/* </div> */}
      {/* Add main content */}
        <CardSensor></CardSensor>   
    </div>
  );
};

export default Main;
