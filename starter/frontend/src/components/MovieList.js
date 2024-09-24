import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((res) => setMovies(res.data.movies));
  }, []);

  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id} onClick={() => onMovieClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
