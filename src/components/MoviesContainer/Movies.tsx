import React, {FC, PropsWithChildren} from 'react';

import {Movie} from "./Movie";
import {IMovies} from "../../interfaces";
import './Movie.css'
import {Pagination} from "./Pagination/Pagination";
import Loader from "./Loader";

interface IProps extends PropsWithChildren{
    movies:IMovies,
    setPage:(page:number)=>void,
    prevNext:{prev:number, next:number}
}

const Movies:FC<IProps> = ({movies, setPage, prevNext}) => {

    const moviesArray = movies?.results;

    return (
        <div className="Movies">
            {!moviesArray ? <Loader/> : moviesArray.map(movie=><Movie key={movie.id} movie={movie}/>)}
            {movies&&<Pagination
                page={movies.page}
                total_pages={movies.total_pages}
                setPage={setPage}
                prevNext={prevNext}/>
            }
        </div>
    );
};

export {Movies};