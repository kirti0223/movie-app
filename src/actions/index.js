// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }

// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

// Action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}