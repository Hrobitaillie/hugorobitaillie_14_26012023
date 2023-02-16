import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout(){
    return(
        <>
            <Header />
            <div className="w-full h-full min-h-screen mt-28">
                <Outlet />
            </div>
        </>
    )
}