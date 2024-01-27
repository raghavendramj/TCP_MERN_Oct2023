import { Link, Outlet, useLocation } from "react-router-dom";
import MovieRouters from "./_00_Routers";

function MovieNavLinks() {

    const location = useLocation();
    const shouldHideAddBtn = location.pathname.includes("/add");
    const shouldHideMoviesBtn = location.pathname.includes("/movies");
    return (
        <>
            <div className="container">
                <ul className="nav">
                    {
                        !shouldHideMoviesBtn &&
                        <li className="nav-item">
                            <Link to="/movies" ><button className="btn btn-primary m-2">Movies</button></Link>
                        </li>
                    }
                    {
                        !shouldHideAddBtn && <li className="nav-item">
                            <Link to="/add"><button className="btn btn-warning m-2">Add New Movie</button></Link>
                        </li>
                    }
                </ul>
                <Outlet />
                <MovieRouters />
            </div>
        </>
    );
}

export default MovieNavLinks;