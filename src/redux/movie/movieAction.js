import axios from "axios";
import {
  BANNER,
  GENRES_LIST,
  NOW_PLAYING,
  POPULAR,
  POPULAR_MOVIES,
  WATCHLISTS,
} from "./movieActionType";

export function banner(data) {
  return {
    type: BANNER,
    payload: data,
  };
}
function nowPlaying(data) {
  return {
    type: NOW_PLAYING,
    payload: data,
  };
}
function popular(data) {
  return {
    type: POPULAR,
    payload: data,
  };
}
function popularMovies(data) {
  return {
    type: POPULAR_MOVIES,
    payload: data,
  };
}
function watchLists(data) {
  return {
    type: WATCHLISTS,
    payload: data,
  };
}
function genres(data) {
  return {
    type: GENRES_LIST,
    payload: data,
  };
}
export const fetchBannerMovie = () => {
  return async (dispatch) => {
    try {
      const res =
        await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US
            `);
      dispatch(banner(res.data));
    } catch (error) {}
  };
};
export const fetchBannerTvShow = () => {
  return async (dispatch) => {
    try {
      const res =
        await axios.get(`https://api.themoviedb.org/3/tv/latest?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US
            `);
      dispatch(
        banner({
          original_title: res.data.name,
          poster_path: res.data.poster_path,
          ...res.data,
        })
      );
    } catch (error) {}
  };
};
export const fetchNowPlayMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
    );
    dispatch(nowPlaying(res.data));
  };
};
export const fetchNowPlayTvShow = () => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
    );
    dispatch(
      nowPlaying({
        original_title: res.data.name,
        poster_path: res.data.poster_path,
        ...res.data,
      })
    );
  };
};
export const fetchPopularMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
      );
      dispatch(popular(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const fetchPopularTvShow = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
      );
      dispatch(
        popular({
          original_title: res.data.name,
          poster_path: res.data.poster_path,
          ...res.data,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
      );
      dispatch(popularMovies(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchWatchList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US&page=1`
      );
      dispatch(watchLists(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const fetchGenresList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=ad0be07569d74653968f36ba64e647c6&language=en-US`
      );
      dispatch(genres(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
