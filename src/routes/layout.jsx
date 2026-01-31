import { Outlet } from "react-router-dom";

export function LayoutMain() {
    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white ">
            <Outlet/>
        </div>
    )
}