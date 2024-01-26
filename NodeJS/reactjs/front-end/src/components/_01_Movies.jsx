import { useEffect, useState } from "react";
import ComponentHeader from "./_00_CompHeader";
import Movie from "./_02_Movie";
import axios from "axios";

function Movies({ movies, setMovies }) { 
    let backEndUrl = "http://localhost:8082/api/movies"; 
    useEffect(() => {
        axios.get(backEndUrl).then((res) => {
            console.log("UI Data :- ", res);
            setMovies(res.data);
        })
    }, []);

    const handleDelete = (movieId) => {
         axios.delete(backEndUrl + "/" + movieId).then((res) => {
            console.log("res -> ", res);
            setMovies(res.data);
        }) 
    }
    
    return (
        <div className="container">
            <ComponentHeader headerBgColor="info" headerText="Movie Management" subHeaderText="Do all you can... Create - Read - Update - Delete" />
            <table className='table table-striped'>
                <thead>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>ReleaseYear</th>
                    <th>Rating</th>
                    <th>Operations</th>
                </thead>
                <tbody>
                    {movies.map((movie, index) => {
                        return <Movie
                            slNo={index + 1}
                            movie={movie}
                            handleDelete={handleDelete}
                        />
                    })}
                </tbody>
            </table>

        </div>
    );
}
export default Movies; 