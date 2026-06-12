import { createContext, useState } from "react";
import { toast } from "react-toastify";

// 1. Initialize context with null or an empty object
export const BookContext = createContext();

// 2. Destructure lowercase 'children' from the props
const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error("The book already exists");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`);
        }
        console.log(currentBook, storedBooks, "book");
    };

      

    const handleWishList = (currentBook) => {

       const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId)

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
        console.log(currentBook, storedBooks, "book");
         
    };
    const data = {
        storedBooks,
        setStoredBooks,
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