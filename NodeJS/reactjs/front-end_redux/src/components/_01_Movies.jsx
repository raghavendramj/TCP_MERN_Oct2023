import { useEffect, useState } from "react";
import ComponentHeader from "./_00_CompHeader";
import Movie from "./_02_Movie";
import axios from "axios";
import { CONSTANTS } from "./_00_Constants";


function Movies({ movies, handleDelete }) {

    return (
        <div className="container">
            <ComponentHeader headerBgColor="info" headerText="Movie Management" subHeaderText="Do all you can... Create - Read - Update - Delete" />
            {
                movies && <table className='table table-striped table-bordered'>
                    <thead className="text-center ">
                        <tr className="table-success">
                            <th>Sl.No</th>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Genre</th>
                            <th>ReleaseYear</th>
                            <th>Rating</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => {
                            return <Movie
                                key={movie.id}
                                slNo={index + 1}
                                movie={movie}
                                handleDelete={handleDelete}
                            />
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
}
export default Movies; 