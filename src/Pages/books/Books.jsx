import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";


const Books = () => {
    const { storedBooks} = useContext(BookContext)
         console.log( storedBooks,"bookContext");
    return (
        <div>
            BooksPage 
        </div>
    );
};

export default Books;