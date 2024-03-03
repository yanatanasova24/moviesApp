import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../services";
import {MovieDetails} from "../components";
import {useAppContext} from "../hooks";
import Loader from "../components/MoviesContainer/Loader";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const {id} = useParams()

    useEffect(() => {
            movieService.getById(+id).then(({data})=>setMovieDetails(data));
    }, [id]);

    const {handleTitleChange} = useAppContext();

    useEffect(() => {
        movieDetails&&handleTitleChange(movieDetails.title);
    }, [movieDetails]);

    return (
        <div>
            {!movieDetails ? <Loader/> : <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};