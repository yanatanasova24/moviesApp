import React, {FC, PropsWithChildren, useState} from 'react';
import StarRating from "react-native-star-rating-widget";

interface IProps extends PropsWithChildren{
    vote_average:number
}

const StarsRating:FC<IProps> = ({vote_average}) => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            <StarRating
                rating={vote_average}
                maxStars={10}
                starSize={20}
                starStyle={{marginLeft:1, marginRight:1}}
                color={"#498afc"}
                onChange={setRating}
            />
        </div>
    );
};

export {StarsRating};