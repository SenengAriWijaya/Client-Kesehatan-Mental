import React from 'react';
import Card from '../Elements/Card/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faBrain, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

const MainContent = () => {
  return (
    <div className="flex-1 sm:mx-20 p-5">
      <div className='container mx-auto h-12 bg-cyan-800 flex items-center justify-center border-gray-200 rounded-md shadow mb-4 w-full sm:w-64 md:w-80 lg:w-60'>
        <h1 className="text-2xl font-bold text-center text-yellow-800">DASHBOARD</h1>
      </div>
      {/* Add main content */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card className="container mx-auto border rounded-md p-4 flex flex-col items-center justify-center text-center"> {/* Menyesuaikan gaya Card */}
          <Card.Header>
            <FontAwesomeIcon icon={faCalendarDays} className='w-6 h-6 mx-4'/>
            <h1 className="text-xl font-bold text-yellow-950">TANGGAL</h1>       
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="border rounded-md p-4 flex flex-col items-center justify-center text-center"> {/* Menyesuaikan gaya Card */}
          <Card.Header>
            <FontAwesomeIcon icon={faHeartPulse} className='w-6 h-6 mx-4'/>
            <h1 className="text-xl font-bold text-yellow-950">MAX30102</h1>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="border rounded-md p-4 flex flex-col items-center justify-center text-center"> {/* Menyesuaikan gaya Card */}
          <Card.Header>
            <FontAwesomeIcon icon={faDroplet} className='w-6 h-6 mx-4'/>
            <h1 className="text-xl font-bold text-yellow-950">GSR</h1>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="border rounded-md p-4 flex flex-col items-center justify-center text-center"> {/* Menyesuaikan gaya Card */}
          <Card.Header>
            <FontAwesomeIcon icon={faBrain} className='w-6 h-6 mx-4'/>
            <h1 className="text-xl font-bold text-yellow-950">STATUS</h1>             
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainContent;
