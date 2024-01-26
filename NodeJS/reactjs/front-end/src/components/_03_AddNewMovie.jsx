import { useState } from "react";
import ComponentHeader from "./_00_CompHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewMovie({ movies, setMovies }) {
    const [newMovie, setNewMovie] = useState({});
    const navigate = useNavigate();

    const isSaveDisabled = !newMovie.title || !newMovie.director
        || !newMovie.genre || !newMovie.releaseYear || !newMovie.rating;

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
        console.log("newMovie", newMovie);
    };

    const handleNewMovie = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8082/api/movies/", newMovie)
            .then((res) => {
                console.log("Post Response :- ", res);
            });
        console.log("New Movie Call don...", newMovie);
        setNewMovie({});
        navigate('/movies');
    };

    // {
    //     "id": 8,
    //     "title": "The Godfather",
    //     "director": "Francis Ford Coppola",
    //     "genre": "Crime",
    //     "releaseYear": 1972,
    //     "rating": 4.9
    //   }

    return (
        <>
            <ComponentHeader headerBgColor="info" headerText="Add New Movie" subHeaderText="Add New Movie Page...." />
            <form onSubmit={handleNewMovie}>
                <div className="form-group">
                    <label htmlFor="name">Name of the movie?</label>
                    <input type="text" name="title" className="form-control" placeholder="Movie Name"
                        value={newMovie.title}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="director">Movie Director?</label>
                    <input type="text" name="director" className="form-control" placeholder="Movie Director"
                        value={newMovie.director}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Movie Genre?</label>
                    <input type="text" name="genre" className="form-control" placeholder="Movie Genre"
                        value={newMovie.genre}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="releaseYear">Movie Release Year?</label>
                    <input type="number" name="releaseYear" className="form-control" placeholder="Movie Release Year"
                        value={newMovie.releaseYear}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="rating">Movie Rating?</label>
                    <input type="number" name="rating" className="form-control" placeholder="Movie Rating"
                        value={newMovie.rating}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2" disabled={isSaveDisabled}>Add New Movie</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>
    );
}

export default AddNewMovie;