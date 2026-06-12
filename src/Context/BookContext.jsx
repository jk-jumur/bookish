import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadListFromLocalDB } from "../utils/localDB";


// 1. Initialize context with null or an empty object
export const BookContext = createContext();

// 2. Destructure lowercase 'children' from the props
const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState([])

//     useEffect(() => {
//         const getReadListFromLocalDB = getAllReadListFromLocalDB()
//         console.log(getReadListFromLocalDB, "getReadListFromLocalDB")
//         setReadList(getReadListFromLocalDB)
//     }, [])

    const handleMarkAsRead = (currentBook) => {

        addReadListToLocalDB(currentBook)
        const isExistBook = readList.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error("The book already exists");
        } else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`);
        }
        console.log(currentBook, readList, "readList");
    };

      

    const handleWishList = (currentBook) => {

       const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId)

         if(isExistInReadList){
            toast.error("The book is already in read list");
            return
         }
        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);
         
         if (isExistBook) {
            toast.error("The book already exists");
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to the wish list`);
        }
        console.log(currentBook, wishList, "wishList");
         
    };
    const data = {
       readList,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };
    console.log(readList)

    // 3. Render lowercase 'children' here
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;