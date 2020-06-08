import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createMovieOrSeries = (payload) => api.post('/user/5eca669c7ae575ae9831c4bb/movie', payload);
export const updateMovieOrSeries = (id, payload) => api.put(`/user/5eca669c7ae575ae9831c4bb/movie/${id}`, payload);
export const deleteMovieOrSeries = (id) => api.delete(`/user/5eca669c7ae575ae9831c4bb/movie/${id}`);
export const getMovieOrSeriesById = (id) => api.get(`/user/5eca669c7ae575ae9831c4bb/movie/${id}`);
export const getAllMovies = () => api.get('/user/5eca669c7ae575ae9831c4bb/movies/');
export const getAllSeries = () => api.get('/user/5eca669c7ae575ae9831c4bb/series/');

export const getImdbTitles = (payload) => api.post('/imdb/titles', payload);
export const getImdbTitleDetails = (id) => api.get(`/imdb/title/${id}`);

const apis = {
    createMovieOrSeries,
    updateMovieOrSeries,
    deleteMovieOrSeries,
    getMovieOrSeriesById,
    getAllMovies,
    getAllSeries,
    getImdbTitles,
    getImdbTitleDetails
}

export default apis;
