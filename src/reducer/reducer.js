
import * as Actions from "./constant/constant"

  export const initialState = {
    movieListData: [],
    likedMovie: [],
    blockedMovie: [],
  };


const Reducer = (state = {movielist:[]}, action) => {
  switch (action.type) {
    case Actions.LOAD_MOVIE:
      return {

      };

    case Actions.HOME_PAGE:
    return {

    };

    default:
      return state;
  }

};



export default Reducer;