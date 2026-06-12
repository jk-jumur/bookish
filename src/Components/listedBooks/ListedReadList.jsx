import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../Ui/BookCard";


const ListedReadList = () => {
     const {readBooks} = useContext(BookContext);
     console.log(readBooks, "bookContext");

       if(readBooks.length === 0){
              return<div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-xl">
                 <h2 className="font-bold text-3xl ">No read list data found</h2>
              </div>
         }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {
             readBooks.map((book, ind) => <BookCard key={ind} book={book}/>)
        }
        </div>
        </div>
    );
};

export default ListedReadList;
