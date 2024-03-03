const baseURL = 'https://api.themoviedb.org/3';

const movies = '/movie/popular';
const genres = '/genre'

const urls = {
    movies:{
        base:movies,
        byId:(id:number):string =>`/movie/${id}`,
        video:(id:number):string =>`/movie/${id}/videos`
    },
    genres:{
        base:genres,
        all: `${genres}/movie/list`,
        byId:(id:number):string => `${genres}/${id}`,
        moviesByGenreId:(id:number):string => `/discover/movie?with_genres=${id}`
    }
}

export {
    baseURL,
    urls
}