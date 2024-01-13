import Sidebar from "../Components/Fragment/Sidebar"
import MainContent from "../Components/Fragment/MainContent"
import React, { Fragment, useState } from "react"

const DashboardAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      {/* Sidebar */}
      {isOpen && <Sidebar />}
      {/* <SideBar></SideBar> */}
      {/* Main content */}
      <MainContent />
      {/* Button to toggle sidebar */}
      {/* <button
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button> */}
    </div>
  )

}

export default DashboardAdmin