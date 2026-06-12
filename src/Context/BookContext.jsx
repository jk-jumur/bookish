import { createContext, useState } from "react";
import { toast } from "react-toastify";

// 1. Initialize context with null or an empty object
export const BookContext = createContext();

// 2. Destructure lowercase 'children' from the props
const BookProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = readBooks.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error("The book already exists");
        } else {
            setReadBooks([...readBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`);
        }
        console.log(currentBook, readBooks, "book");
    };

      

    const handleWishList = (currentBook) => {

       const isExistInReadList = readBooks.find((book) => book.bookId === currentBook.bookId)

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
        console.log(currentBook, readBooks, "book");
         
    };
    const data = {
        readBooks,
        setReadBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };

    // 3. Render lowercase 'children' here
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;