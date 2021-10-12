import axios from "axios";
import { BANNER, NOW_PLAYING, POPULAR } from "./movieActionType";

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
    } catch (error) {}
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
    } catch (error) {}
  };
};
