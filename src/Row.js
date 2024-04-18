import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false, genres, onFetchMovieDetails }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl, title]);

    useEffect(() => {
        const closeOnEscapeKey = e => (e.key === "Escape" ? setShowModal(false) : null);
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
    }, []);
    

    const opts = {
        height: "480",
        width: "800",
        playerVars: {
            autoplay: 1,
        }
    };

    const handleClick = async (movie) => {
        setSelectedMovie(movie);
        const details = await onFetchMovieDetails(movie.id);
        setMovieDetails(details);
        setShowModal(true);  
    };

    const handlePlayTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => {
                console.error('Error fetching trailer:', error);
                setTrailerUrl('');
            });
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setTrailerUrl('');
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map(movie =>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} 
                        />
                    )
                )}
            </div>
            {showModal && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={handleClose}
                    genres={genres}
                    onPlayTrailer={handlePlayTrailer}
                    details={movieDetails}
                />
            )}
            {trailerUrl && (
                <div className="youtubeModal">
                    <YouTube videoId={trailerUrl} opts={opts} />
                    <button className="youtubeCloseBtn" onClick={handleClose}>×</button>
                </div>
            )}
        </div>
    );
}

function MovieModal({ movie, genres, onClose, onPlayTrailer, details }) {
    console.log('Rendering modal with details:', details);
    if (!movie || !genres) return null;

    // Map genre IDs to names
    const genreNames = movie.genre_ids
        .map(id => genres.find(genre => genre.id === id)?.name)
        .filter(Boolean)
        .join(', ');

        return (
            <div className="modal" onClick={onClose}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={onClose}>&times;</span>
                    <h1 className='detail_items'>{movie.title || movie.original_title || movie.name}</h1>
                    <div className="detail_items">
                        <div className="detail_item">{genreNames}</div>
                        <div className="detail_item">{details ? `${details.runtime}m` : ' '}</div>
                    </div>
                    <h3>{details ? details.overview : ' '}</h3>
                    <button 
                        className='playtrailer__button'
                        onClick={() => {
                            onPlayTrailer(movie);
                            onClose();
                    }}>Play Trailer</button>
                </div>
            </div>
        );
        
        
}


export default Row;
