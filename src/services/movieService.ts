import {apiService} from "./apiService"
import {urls} from "../constants"
import {IMovies} from "../interfaces";
import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {IMovieDetails} from "../interfaces";
import {IVideo} from "../interfaces";

const movieService = {
    getAll: (page= '1'):IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getById: (id:number):IRes<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    getGenreById: (id:number):IRes<string> => apiService.get(urls.genres.byId(id)),
    getMoviesByGenreId: (id:number, page= '1'):IRes<IMovies> => apiService.get(urls.genres.moviesByGenreId(id), {params:{page}}),
    getGenres:():IRes<IGenres> => apiService.get(urls.genres.all),
    getVideo:(id:number):IRes<IVideo> => apiService.get(urls.movies.video(id))
}

export {movieService}