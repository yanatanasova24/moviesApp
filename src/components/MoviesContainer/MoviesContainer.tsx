import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import {movieService} from "../../services";
import {IMovies} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks";
import {Movies} from "./Movies";
import Loader from "./Loader";

interface IProps extends PropsWithChildren{

}

const MoviesContainer:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovies>(null);
    const [query, setQuery] = useSearchParams({page:'1'})
    const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const {trigger} = useAppContext();

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data})=>{
            setMovies(data);
            setPrevNext({prev:data.page - 1, next:data.page + 1})
        })
    }, [trigger, query.get('page')]);

    const setPage = (number:number)=>{
        setQuery({page: number.toString()})
    };

    return (
        <div>
            {!movies ? <Loader/> : movies&&<Movies
                movies={movies}
                setPage={setPage}
                prevNext={prevNext}/>}
        </div>
    );
};

export {MoviesContainer};