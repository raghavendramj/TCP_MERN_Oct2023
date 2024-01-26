import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ComponentHeader from "./_00_CompHeader";
import axios from "axios";
import { CONSTANTS, Util } from "./_00_Constants";

function EditMovie({ movies }) {

    const { movieId } = useParams();
    const navigate = useNavigate();
    const [editedMovie, setEditedMovie] = useState(CONSTANTS.emptyMovieObj);
    const isSaveDisabled = !editedMovie.title || !editedMovie.director
        || !editedMovie.genre || !editedMovie.releaseYear || !editedMovie.rating;

    useEffect(() => {
        const movieToEdit = movies.find((movie) => String(movie.id) === movieId);
        setEditedMovie(movieToEdit || {});
    }, [movieId, movies]);

    const handleEditInputChange = (e) => {
        Util.handleEditInputChange(setEditedMovie, e.target);
    };
    const handleUpdatemovie = (e) => {
        e.preventDefault();
        axios.put(CONSTANTS.backEndUrl, editedMovie)
            .then((res) => { 
                navigate('/movies');
            }); 
        setEditedMovie(CONSTANTS.emptyMovieObj);
    };


    const headerText = `Edit ${editedMovie.title}`;
    return (
        <>
            <ComponentHeader headerBgColor="info" headerText={headerText} subHeaderText="Fill all the movie details..." />
            <form onSubmit={handleUpdatemovie}>
                <div className="form-group">
                    <label htmlFor="name">Name of the movie?</label>
                    <input type="text" name="title" className="form-control" placeholder="Movie Name"
                        value={editedMovie.title}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="director">Movie Director?</label>
                    <input type="text" name="director" className="form-control" placeholder="Movie Director"
                        value={editedMovie.director}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Movie Genre?</label>
                    <input type="text" name="genre" className="form-control" placeholder="Movie Genre"
                        value={editedMovie.genre}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="releaseYear">Movie Release Year?</label>
                    <input type="number" name="releaseYear" className="form-control" placeholder="Movie Release Year"
                        value={editedMovie.releaseYear}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="rating">Movie Rating?</label>
                    <input type="number" name="rating" className="form-control" placeholder="Movie Rating"
                        value={editedMovie.rating}
                        onChange={handleEditInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2" disabled={isSaveDisabled}>Save Changes</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>
    );

}

export default EditMovie;