import React, {FC, PropsWithChildren} from 'react';

import "./Poster.css"

interface IProps extends PropsWithChildren{
    poster_path:string,
    original_title:string,
    release_date:string,
    vote_count:number,
    vote_average:number
}

const Poster:FC<IProps> = ({poster_path, release_date, vote_count, vote_average}) => {

    const posterLink = `http://image.tmdb.org/t/p/w300${poster_path}`

    return (
        <div className={"Poster"} style={{backgroundImage: `url(${posterLink})`}}>
            <div>
                <p>{release_date.slice(0, 4)}</p>
                <p>{vote_count} votes</p>
                <span>{vote_average.toFixed(1)}</span>
            </div>
        </div>
    );
};

export {Poster};