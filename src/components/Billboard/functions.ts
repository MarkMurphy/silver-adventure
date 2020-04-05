enum BackdropSize {
  SM = 'w300',
  MD = 'w780',
  LG = 'w1280',
  XL = 'original',
}

export const getMovieBackdropURL = (
  movie: TMDB.Movie,
  size: BackdropSize = BackdropSize.LG
) => {
  const path = movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const formatReleaseDate = (movie: TMDB.Movie) => {
  const date = new Date(movie.release_date);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${month} ${year}`;
};
