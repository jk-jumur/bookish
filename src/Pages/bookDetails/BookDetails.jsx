// import { use } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";
//way-1
// const booksPromise = fetch('/booksData.json')
// .then(res => res.json())


const BookDetails = () => {
    const {bookId: booksParamsId} = useParams();
    console.log(booksParamsId, "booksParamsId");


    const books = useLoaderData();
    console.log( typeof books, "books");
       const expectedBook = books.find((book) => book.bookId === Number(booksParamsId))
    console.log(expectedBook, "expectedBook");

    const { bookName, author, image, review, totalPages, rating, category, tags,  publisher, yearOfPublishing} = expectedBook
 
    // const books = use(booksPromise);
    //     console.log(books, "books")

     const {handleMarkAsRead} = useContext(BookContext)
     console.log(handleMarkAsRead,"bookContext");


    
    return (
      <div className="grid  grid-cols-2  shadow-sm max-w-6xl  mx-auto  my-8">
        <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <img src={image} alt="Album" className="h-[400px]" />
      </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
    <p>By: {author}</p>
    <p className="py-2 border-y text-[#131313] text-2xl">{category}</p>
    <p><span className="text-[#131313]">Review:</span> {review}</p>

     <div className="flex items-center gap-3">
                 <h2 className="text-2xl font-bold text-[#131313] ">Tag</h2>
                {tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-500/5 font-medium px-4 py-3 rounded-full"> {tag}</div>))}
            </div>
    <div className=" border-t space-y-3">
        <div className="flex justify-between items-center gap-2">
             <span className="text-[#131313]/70 text-xl">Number of Pages: </span> <span className="text-[#131313] text-2xl font-semibold">{totalPages}</span>
        </div>

          <div className="flex justify-between items-center gap-2">
             <span className="text-[#131313]/70 text-xl">Publisher: </span> <span className="text-[#131313] text-2xl font-semibold">{publisher}</span>
        </div>

          <div className="flex justify-between items-center gap-2">
             <span className="text-[#131313]/70 text-xl">Year of Publishing:</span> <span className="text-[#131313] text-2xl font-semibold">{yearOfPublishing}</span>
        </div>

          <div className="flex justify-between items-center gap-2">
             <span className="text-[#131313]/70 text-xl">Rating: </span> <span className="text-[#131313] text-2xl font-semibold">{rating}</span>
        </div>
        <div className="flex items-center gap-2">
             <button className="btn " onClick={() => handleMarkAsRead(expectedBook)}>Read</button>
              <button className="btn btn-primary">Wishlist</button>
        </div>
     
    </div>
  </div>
</div>
    );
};

export default BookDetails;
