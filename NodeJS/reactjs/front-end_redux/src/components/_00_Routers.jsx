import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "./_01_Movies";
import AddNewMovie from "./_03_AddNewMovie";
import EditMovie from "./_04_EditMovie";
import { useEffect } from "react";
import PageNotFound from "./_05_PNF";

import { useDispatch, useSelector } from 'react-redux'

function MovieRouters() { 
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [dispatch]);

    const handleDelete = (id) => {
        console.log("Delete invoked :- ", id);
        dispatch({
            type: 'DELETE_MOVIE',
            payload: id,
        });
    };

    return (
        <>
            <Routes>
                <Route path="/movies" element={<Movies movies={movies} handleDelete={handleDelete} />}></Route>
                <Route path="/add" element={<AddNewMovie movies={movies} />}> </Route>
                <Route path="/edit/movie/:movieId" element={<EditMovie movies={movies} />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    );
}

export default MovieRouters;