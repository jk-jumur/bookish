import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/books/Books";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
         {
            index: true,
           Component: HomePage
         },

          {
            path: "/books",
            Component: Books

          }
        
      ]
    }


])