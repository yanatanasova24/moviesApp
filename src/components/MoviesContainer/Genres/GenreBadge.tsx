import React, {FC, PropsWithChildren} from 'react';

import "./GenreBadge.css"

interface IProps extends PropsWithChildren{
    id:number,
    name:string
}

const GenreBadge:FC<IProps>  = ({id, name}) => {

    return (
        <a href={`/genres/${id}/${name}`} className="GenreBadge">
            {name}
        </a>
    );
};

export {GenreBadge};