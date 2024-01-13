import React from 'react';
import { Link } from "react-router-dom"
import { faHouse, faFile, faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-20 sm:w-64 h-screen flex flex-col">
      <div className="border-b p-5 text-center sm:text-left">
        <span className="hidden sm:block">MentalAware</span>
        <span className="sm:hidden">MA</span>
      </div>
      {/* Add sidebar links */}
      <ul className="py-4 flex-1 sm:flex-col sm:overflow-y-auto">
        <li className="px-2 py-2 hover:bg-gray-700 flex items-center">
          <FontAwesomeIcon icon={faHouse} className='w-6 h-6 mx-4 sm:mr-0' />
          <Link to="#" className="sm:inline hidden mx-4">Dashboard</Link>
        </li>
        <li className="px-2 py-2 hover:bg-gray-700 flex items-center">
          <FontAwesomeIcon icon={faBookOpen} className='w-6 h-6 mx-4 sm:mr-0' />
          <Link to="" className="sm:inline hidden mx-4">Form</Link>
        </li>
        <li className="px-2 py-2 hover:bg-gray-700 flex items-center">
          <FontAwesomeIcon icon={faUser} className='w-6 h-6 mx-4 sm:mr-0' />
          <Link to="" className="sm:inline hidden mx-4">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
