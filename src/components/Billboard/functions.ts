export const getMovieBackdropURL = (
  movie: TMDB.Movie,
  size: string = 'original'
) => {
  return `https://image.tmdb.org/t/p/${size}/${movie.backdrop_path}`;
};

export const formatReleaseDate = (movie: TMDB.Movie) => {
  const date = new Date(movie.release_date);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${month} ${year}`;
};
