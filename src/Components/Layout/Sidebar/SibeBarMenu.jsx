import React from "react";
import { Link } from "react-router-dom"
import { faHouse, faFile, faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBarMenu = () => {
    return (
        <section className="container w-20 bg-blue-gray-500 h-screen mx-0 flex flex-col sm:w-52">
            <div className=" mx-auto my-5  w-10 h-auto sm:flex sm:justify-between sm:items-center sm:mx-9">
                <img src="https://www.kitchensetminimalis.co.id/image-upload/logo-wa.png" alt="" className="sm:mr-5"/>
                <h1 className="pt-auto text-xl font-bold hidden sm:block">Logo</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/dashboard" className="flex justify-center items-center sm:items-center sm:mx-0 sm:justify-start sm:ml-6">
                            <FontAwesomeIcon icon={faHouse} className="text-center text-xl "/>
                            <span className="hidden sm:block sm:text-lg sm:font-bold sm:mx-4">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/form" className="flex justify-center items-center my-3 sm:items-center sm:mx-0 sm:justify-start sm:ml-6">
                            <FontAwesomeIcon icon={faHouse} className="text-center text-xl "/>
                            <span className="hidden sm:block sm:text-lg sm:font-bold sm:mx-4">Form</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SideBarMenu