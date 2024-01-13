import Sidebar from "../../Components/Fragment/Sidebar";
// import MainContent from "../../Components/Fragment/MainContent";
import Main from "../../Components/Fragment/Main";
import React, { Fragment, useState } from "react"
import SideBarMenu from "../../Components/Layout/Sidebar/SibeBarMenu";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="flex">
        {/* Sidebar */}
        {/* {isOpen && <Sidebar />} */}
        <SideBarMenu></SideBarMenu>
        {/* Main content */}
        {/* <MainContent /> */}
        {/* <Main></Main> */}
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

export default  Dashboard