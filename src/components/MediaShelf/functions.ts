enum PosterSize {
  XXS = 'w92',
  XS = 'w154',
  SM = 'w185',
  MD = 'w342',
  LG = 'w500',
  XL = 'w780',
  SRC = 'original',
}

export const getMoviePosterURL = (
  movie: TMDB.Movie,
  size: PosterSize = PosterSize.LG
) => {
  const path = movie.poster_path;
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};
