import { useDispatch, useSelector } from "react-redux";
import ComponentHeader from "../07_Utils/_00_ComponentHeader";
import Book from "./02_Book";

function BookOperations() {
    let books = useSelector(state => state);

    const dispatch = useDispatch();
    const handleNewBook = () => {
        let addBookAction = {
            type: 'add',
            payload: {
                "title": "The Catcher in the Rye",
                "author": "J.D. Salinger",
                "genre": "Fiction",
                "publicationYear": 1951,
                "rating": 4.2
            }
        }

        console.log("1. addBookAction -> ", addBookAction);
        //Step 2 :- Dispacth your action
        dispatch(addBookAction);
    }

    const handleDelete = (bookId) => {
        let deleteBookAction = {
            type: 'delete',
            payload: {
                id: bookId
            }
        }
        console.log("2. deleteBookAction -> ", deleteBookAction);
        //1. Action is dispatched
        dispatch(deleteBookAction);
    }
    return (
        <div className="container">
            <button className="btn btn-primary m-3 btn-lg" onClick={handleNewBook}>Add New Book</button>
            <ComponentHeader headerBgColor="info" headerText="React Redux Example" subHeaderText="React Redux Introduction - Book Stores!" />
            <table className='table table-striped'>
                <thead>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>PublicationYear</th>
                    <th>Rating</th>
                    <th>Operations</th>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        return <Book
                            slNo={index + 1}
                            book={book}
                            handleDelete={handleDelete}
                        />
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default BookOperations;


// "id": 7,
// "title": "The Lord of the Rings",
// "author": "J.R.R. Tolkien",
// "genre": "Fantasy",
// "publicationYear": 1954,
// "rating": 4.6

