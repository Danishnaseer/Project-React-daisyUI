import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';

const API_KEY = '781124233027ea9846975e0c6e14704e'; // Replace with your TMDb API key

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const [movies, setMovies] = useState([]); // State to hold the fetched movie data

  const searchMovies = async (title) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      title
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const movies = data.results;
      setMovies(movies); // Update the movies state with the fetched data
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies('Hello'); // Replace 'Avengers' with the desired movie title or search query
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for movies"
        />
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="container">
        <div className="movie">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <div>
                <p>{movie.release_date}</p>
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
              <div>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </div>
              <div>
                <div>
                  <h3>{movie.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
