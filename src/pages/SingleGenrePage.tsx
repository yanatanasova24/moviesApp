import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {IMovies} from "../interfaces";
import {movieService} from "../services";
import {Movies} from "../components";
import {useAppContext} from "../hooks";
import Loader from "../components/MoviesContainer/Loader";

const SingleGenrePage = () => {

    const {id, name} = useParams();

    const [movies, setMovies] = useState<IMovies>(null);
    const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const [query, setQuery] = useSearchParams({page:'1'})
    const {trigger, handleTitleChange} = useAppContext();

    useEffect(() => {
        handleTitleChange(name);
    }, []);

    useEffect(() => {
        movieService.getMoviesByGenreId(+id, query.get('page')).then(({data})=> {
                setMovies(data);
                setPrevNext({prev:data.page - 1, next:data.page + 1})
            }
        );
    }, [trigger, query.get('page')]);

    const setPage = (number:number)=>{
        setQuery({page: number.toString()})
    };

    return (
            <div>
                {!movies ? <Loader/> : <Movies movies={movies} setPage={setPage} prevNext={prevNext}/>}
        </div>
    );
};

export {SingleGenrePage};