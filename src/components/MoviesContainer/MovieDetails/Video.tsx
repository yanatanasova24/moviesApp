import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import {IVideo} from "../../../interfaces";
import {movieService} from "../../../services";
import "./Video.css"

interface IProps extends PropsWithChildren{
    id:number
}

const Video:FC<IProps> = ({id}) => {

    const [video, setVideo] = useState<IVideo>(null)

    useEffect(() => {
        movieService.getVideo(id).then(({data}) => setVideo(data));
    }, []);

    const videoUrl = `https://www.youtube.com/embed/${video?.results[0].key}`

    return (
        <div className="VideoWrap">
            <h4>{video?.results[0].name}</h4>

            {videoUrl&&<iframe width="560"
                    height="315"
                    src={videoUrl}
                    title="Youtube Player"
                    allowFullScreen></iframe>}
        </div>
    );
};

export {Video};