import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
             
           
        </div>
    );
};

export default MainLayout;