import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages/";
import {GenresPage} from "./pages";
import {SingleGenrePage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'/movies/'}/>
            },
            {
                path:'movies', element:<MoviesPage/>,
            },
            {
                path: 'movies/:id', element:<MovieDetailsPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            },
            {
                path:'genres/:id/:name', element:<SingleGenrePage/>,
            }
        ]
    }
]);

export {
    router
}