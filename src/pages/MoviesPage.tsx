import React, {useEffect} from 'react';

import {MoviesContainer} from "../components";
import {useAppContext} from "../hooks";

const MoviesPage = () => {
    const {handleTitleChange} = useAppContext();
    useEffect(() => {
        handleTitleChange('Popular Movies');
    }, []);

    return (
        <div>
            <MoviesContainer/>
        </div>
    );
};

export {MoviesPage};