import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieList from '../MovieList';

jest.mock('axios');

const mockMoviesList = [
  { id: 1, title: 'Movie 1', description: 'Movie Desc 1' },
  { id: 2, title: 'Movie 2', description: 'Movie Desc 2' },
  { id: 3, title: 'Movie 3', description: 'Movie Desc 3' }
];

test('Movie Title', async () => {
  axios.get.mockResolvedValueOnce({ data: mockMoviesList });

  const onMovieClick = jest.fn();
  render(<MovieList onMovieClick={onMovieClick} />);

  const movie1 = await screen.findByText('Movie 1');
  const movie2 = await screen.findByText('Movie 2');
  const movie3 = await screen.findByText('Movie 3');

  expect(movie1).toBeInTheDocument();
  expect(movie2).toBeInTheDocument();
  expect(movie3).toBeInTheDocument();
});

test('Movie Clicked', async () => {
  axios.get.mockResolvedValueOnce({ data: mockMoviesList });

  const onMovieClick = jest.fn();
  render(<MovieList onMovieClick={onMovieClick} />);

  const movie1 = await screen.findByText('Movie 1');

  fireEvent.click(movie1);
  expect(onMovieClick).toHaveBeenCalledWith(mockMoviesList[0]);
});