import { BANNER, NOW_PLAYING, POPULAR } from "./movieActionType";

const initialState = {
  latestMovie: {},
  nowPlay: {},
  popular: {},
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
    default:
      return state;
  }
};
export default movieReducer;
