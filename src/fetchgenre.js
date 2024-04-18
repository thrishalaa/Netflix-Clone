
import axios from 'axios';  // Ensure axios is already imported

const API_KEY = "be908bdb5c1ea76d7e13a2fe4d873d78";
const BASE_URL = "https://api.themoviedb.org/3/";

// Function to fetch genres
export const fetchGenres = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/genre/movie/list`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        });
        return data.genres;
    } catch (error) {
        console.error("Error fetching genres:", error);
        return [];
    }
};

// Function to fetch movie details including runtime
export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        });
        console.log(response.data.runtime); // Log the runtime
        return response.data;
    } catch (error) {
        console.error("Failed to fetch movie details:", error);
        return null;
    }
};

