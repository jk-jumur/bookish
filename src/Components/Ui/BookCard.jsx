
import { CiStar } from "react-icons/ci";

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100  shadow-sm p-6 border border-gray-200 mt-5">
            <figure className="p-6 bg-gray-300 rounded-xl flex justify-center items-center">
                
            <img
               src={book.image}
              alt={book.bookName}
              className="rounded-xl h-[250px] object-cover"/>
               
       </figure>
         <div className="card-body">
            <div className="flex items-center gap-3">
                {book.tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-500/5 font-medium px-4 py-3 rounded-full">{tag}</div>))}
            </div>
            
        <h2 className="card-title text-2xl font-bold">{book.bookName}
          
        </h2>
          <p className="text-xl text-[#424242]">By: {book.author}</p>
      <div className="card-actions justify-between border-t border-dashed border-gray-200 pt-4">
      <div className="  text-[#424242] text-2xl">{book.category}</div>
      <div className="  text-[#424242] text-2xl flex gap-2 items-center">{book.rating}
        <CiStar className="text-[#424242] text-3xl"/>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookCard;