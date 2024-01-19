function Book({ slNo, book, handleDelete }) { 
    return (
        <tr key={book.id}>
            <td>{slNo}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publicationYear}</td>
            <td>{book.rating}</td>
            <td><button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button></td>
        </tr>
    );
}

export default Book;
