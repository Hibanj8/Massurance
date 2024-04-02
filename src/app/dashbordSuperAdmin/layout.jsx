"use client"

import { useState } from "react";
import Sidebar from "../_components/SideBar";

export default function Layout({ children }) {

    // const [isShow, setIsShow] = useState<boolean>(true);

    // const handleToggleSidebar = () => {
    //     console.log("Toggle sidebar");
    //     setIsShow(!isShow);
    // };

    return (
        <div className="flex flex-row h-screen md:flex-row overflow-hidden">
            {/* <Sidebar isShow={isShow} onShow={handleToggleSidebar} /> */}
            <Sidebar/>
            <div className="flex flex-col flex-grow w-full">
                <div className="bg-slate-200 min-h-screen overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}