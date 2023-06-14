import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';

const API_KEY = '781124233027ea9846975e0c6e14704e'; // Replace with your TMDb API key

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  const searchMovies = async (title) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      title
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const movies = data.results;
      movies.forEach((movie) => {
        console.log(movie);
        // Here, you can access and display any specific properties of the movie
        // For example: console.log(movie.title), console.log(movie.release_date), etc.
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies('Avengers'); // Replace 'Avengers' with the desired movie title or search query
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
    </div>
  );
};

export default App;
