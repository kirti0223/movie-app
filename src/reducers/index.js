import { ADD_MOVIES, ADD_TO_FAVOURITES } from "../actions";

const initialState = {
    list: [],
    favourites: []
}

export default function movies(state = initialState, action){
    // if(action.type == ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES: return {
            ...state,
            list: action.movies
        }
        case ADD_TO_FAVOURITES: return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
        default: return {
            ...state
        }
    }
} 
