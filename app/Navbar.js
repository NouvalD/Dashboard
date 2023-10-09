import React from "react";
import {BsPersonCircle} from "react-icons/bs";
import {BsBell} from "react-icons/bs";

const Navbar = () =>{
    return (
        <>
            <nav className="bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-black font-bold">Dashboard</a>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="bg-slate-100 rounded-full p-3 text-x1">
                                <a href="/"><BsBell/></a>
                            </div>
                            <div className="ml-2 flex bg-[url('../img/profile.svg')] bg-center rounded-full p-5">

                            </div>
                            <div className="ml-5 flex items-center space-x-4">
                                <a href="/" className="text-black font-bold">Nouval</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;