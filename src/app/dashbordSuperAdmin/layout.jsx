"use client"
import Sidebar from "../_components/SideBar";

export default function Layout({ children }) {

    return (
        <div className="flex flex-row h-screen md:flex-row overflow-hidden">
            <Sidebar/>
            <div className="flex flex-col flex-grow w-full">
                <div className="bg-slate-300 min-h-screen overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}