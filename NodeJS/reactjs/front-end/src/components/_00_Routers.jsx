import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "./_01_Movies";
import AddNewMovie from "./_03_AddNewMovie";
import EditMovie from "./_04_EditMovie";
import { useState } from "react";
import PageNotFound from "./_05_PNF";

function MovieRouters() {
    let [movies, setMovies] = useState([]);
    return (
        <>
            <Routes>
                <Route path="/movies" element={<Movies
                    movies={movies}
                    setMovies={setMovies} />}></Route>
                <Route path="/add" element={<AddNewMovie movies={movies} />}> </Route>
                <Route path="/edit/movie/:movieId" element={<EditMovie movies={movies} />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>


    );
}

export default MovieRouters;