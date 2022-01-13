import * as Actions from "./constant/constant"

export const loadingMovie = (movieList) => {
    return {
        type: Actions.LOAD_MOVIE,
        payload:movieList
    };
};