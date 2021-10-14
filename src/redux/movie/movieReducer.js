import {
  BANNER,
  NOW_PLAYING,
  POPULAR,
  POPULAR_MOVIES,
  WATCHLISTS,
} from "./movieActionType";

const initialState = {
  latestMovie: {},
  nowPlay: {},
  popular: {},
  popularMovie: {},
  watchLists: {},
  isLoading: true,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BANNER:
      return {
        ...state,
        isLoading: false,
        latestMovie: action.payload,
      };
    case NOW_PLAYING:
      return {
        ...state,
        isLoading: false,
        nowPlay: action.payload,
      };
    case POPULAR:
      return {
        ...state,
        popular: action.payload,
        isLoading: false,
      };
    case POPULAR_MOVIES:
      return {
        ...state,
        popularMovie: action.payload,
      };
    case WATCHLISTS:
      return {
        ...state,
        watchLists: action.payload,
      };

    default:
      return state;
  }
};
export default movieReducer;
