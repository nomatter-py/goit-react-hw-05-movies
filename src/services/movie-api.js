import axios from 'axios';

const KEY = '2eedd5583908f09c336fb6c1916fc5f0';
const URL = 'https://api.themoviedb.org/3/';

export let pathParams = "/trending/movie/day";

 export const params = {

 };

const customAxios = axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
  },
});

export const getTrending = async () => {
  try {
    const response = await customAxios.get("/trending/movie/day", {
      params,
    });

    const data = await response.data
    return data
    //return response.data;
  } catch (error) {
    throw new Error(`Smth went wrong ${error}`);
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await customAxios.get(`/movie/${id}`, {
      params,
    });

    const data = await response.data
    return data
    //return response.data;
  } catch (error) {
    throw new Error(`Smth went wrong ${error}`);
  }
};

export const getMovieCredits = async (id) => {
  try {
    const response = await customAxios.get(`/movie/${id}/credits`, {
      params,
    });

    const data = await response.data
    return data
  } catch (error) {
    throw new Error(`Smth went wrong ${error}`);
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await customAxios.get(`/movie/${id}/reviews`, {
      params,
    });

    const data = await response.data
    return data
  } catch (error) {
    throw new Error(`Smth went wrong ${error}`);
  }
};


export const serachMovies = async (query) => {
  try {
    params.query = query;
    const response = await customAxios.get(`/search/movie`, {
      params,
    });

    const data = await response.data
    return data
  } catch (error) {
    throw new Error(`Smth went wrong ${error}`);
  }
};
