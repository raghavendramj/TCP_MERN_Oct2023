function Movie({ slNo, movie, handleDelete }) {
    return (
        <tr key={movie.id}>
            <td>{slNo}</td>
            <td>{movie.title}</td>
            <td>{movie.author}</td>
            <td>{movie.genre}</td>
            <td>{movie.releaseYear}</td>
            <td>{movie.rating}</td>
            <td><button className="btn btn-danger" onClick={() => handleDelete(movie.id)}>Delete</button></td>
        </tr>
    );
}

export default Movie;