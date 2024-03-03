import React, {FC, PropsWithChildren} from 'react';
import {GenreBadge} from "../Genres/GenreBadge";

import {IMovieDetails} from "../../../interfaces";
import "./MovieDetails.css"
import {StarsRating} from "./StarsRating";
import {Video} from "./Video";

interface IProps extends PropsWithChildren{
    movieDetails:IMovieDetails
}

const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {id, title, original_title, original_language, genres, overview, poster_path, release_date, vote_average, vote_count, budget, runtime, tagline} = movieDetails
    const posterLink = `http://image.tmdb.org/t/p/w300${poster_path}`;

    return (
        <div className="MovieDetails">
            <div className="LeftWrap"><img src={posterLink} alt={original_title}/>
                <StarsRating vote_average={vote_average}/>
                <div className="Rating">
                    <p><span>{vote_average.toFixed(2)}</span>/10</p>
                    <p>{vote_count} votes</p>
                </div>
            </div>
            <div className="RightWrap">
                <h2>{title}</h2>
                <div className="infoWrap">
                    <b>{release_date.slice(0, 4)}</b>
                    <b>{runtime} min</b>
                    <b>{original_language.toUpperCase()}</b>
                </div>

                <b className="tagLine">{tagline ? `"${tagline}"` : ''}</b>

                <div className="GenresWrap">
                    {genres.map(genre=><GenreBadge key={genre.id} id={genre.id} name={genre.name}/>)}
                </div>
                <p>{overview}</p>

                <Video id={id}/>

            </div>

        </div>
    );
};

export {MovieDetails};