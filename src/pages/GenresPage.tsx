import React, {useEffect, useState} from 'react';

import {movieService} from "../services";
import {IGenres} from "../interfaces";
import {GenreBadge} from "../components";
import {useAppContext} from "../hooks";
import "../components/MoviesContainer/Genres/GenreCloud.css"
import Loader from "../components/MoviesContainer/Loader";

const GenresPage= () => {

    const {handleTitleChange} = useAppContext();

    handleTitleChange('Genre Cloud');

    const [genres, setGenres] = useState<IGenres>(null);

    useEffect(() => {
        movieService.getGenres().then(({data})=> setGenres(data));
    }, []);

    const genresList = genres?.genres;

    return (
        <div className="GenreCloud">
            {!genres ? <Loader/> : genresList.map(genre => <GenreBadge id={genre.id} key={genre.id} name={genre.name}/>)}
        </div>
    );
};

export {GenresPage};