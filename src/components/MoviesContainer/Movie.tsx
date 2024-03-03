import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import './Movie.css'
import {Poster} from "./Poster/Poster";

interface IProps extends PropsWithChildren{
    movie:IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, title, original_title, poster_path, vote_average, release_date, vote_count} = movie;

    const navigate = useNavigate();

    return (
        <div className="Movie">
            <a href={`/movies/${id.toString()}`} onClick={()=>navigate(`/movies/${id.toString()}`, {state:{movie}})}>
                <Poster poster_path={poster_path} original_title={original_title} release_date={release_date} vote_count={vote_count} vote_average={vote_average}/>
                <h3>{title}</h3>
            </a>
        </div>
    );
};

export {Movie};