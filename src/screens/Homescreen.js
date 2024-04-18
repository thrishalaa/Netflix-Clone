import React, {useEffect, useState} from 'react';
import "./Homescreen.css";
import Nav from "../Nav"; 
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";
import { fetchGenres, fetchMovieDetails } from '../fetchgenre';

function Homescreen() {
  const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadGenres = async () => {
            const loadedGenres = await fetchGenres();
            setGenres(loadedGenres);
        };

        loadGenres();
    }, []);

    const handleFetchMovieDetails = async (movieId) => {
      const details = await fetchMovieDetails(movieId);
      if (!details) {
        console.log("No details available for this movie.");
        return null;
    }
      console.log(details.overview);
      return details;
    };

  return (
    <div className="homeScreen">
        <Nav />

        <Banner />

        <Row 
            title='NETFLIX ORIGINALS'
            fetchUrl ={requests.fetchNetflixOriginals}
            isLargeRow
            genres={genres}
            onFetchMovieDetails={handleFetchMovieDetails}
        /> 
        <Row title='Trending Now' fetchUrl ={requests.fetchTrending} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Top Rated' fetchUrl ={requests.fetchTopRated} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Action Movies' fetchUrl ={requests.fetchNetflixOriginals} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Comedy Movies' fetchUrl ={requests.fetchComedyMovies} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Horror Movies' fetchUrl ={requests.fetchHorrorMovies} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Romance Movies' fetchUrl ={requests.fetchRomanceMovies} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} /> 
        <Row title='Documentries' fetchUrl ={requests.fetchDocumentaries} genres={genres} onFetchMovieDetails={handleFetchMovieDetails} />    
        

    </div>
  )
}

export default Homescreen;
