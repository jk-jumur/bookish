import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";

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

          },
           {
             path: "/bookDetails/:bookId",
             Component: BookDetails,
             loader: () => fetch("/booksData.json")
          }
        
      ],

      errorElement: <ErrorPage/>
    }


])