import { Link } from "react-router-dom";

function Movie({ slNo, movie, handleDelete }) {
    console.log("Movie :- ", movie);
    const toLink = `/edit/movie/${movie._id}`;
    return (
        <tr>
            <td>{slNo}</td>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>{movie.releaseYear}</td>
            <td>{movie.rating}</td>
            <td>
                <button className="btn btn-danger" onClick={() => handleDelete(movie._id)}>Delete</button>
                <Link to={toLink}><button className="btn btn-warning m-2">Edit </button></Link>
            </td>
        </tr>
    );
}

export default Movie;