import './App.css';
import React, { useState, useEffect } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey=82bcdb64'


function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies('Spiderman');
  },[])
 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }


  return (
    <div className="app">
        <h1>CINEMATE</h1>
      <div className='search'>
        <input 
          placeholder='Search for a movie'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}
  

export default App;
