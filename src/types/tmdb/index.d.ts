declare namespace TMDB {
  export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string | null;
    original_language: string;
    original_title: string;
    genre_ids: [number];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
  }

  export namespace Images {
    export enum BackdropSize {
      SM = 'w300',
      MD = 'w780',
      LG = 'w1280',
      SRC = 'original',
    }

    export enum PosterSize {
      XXS = 'w92',
      XS = 'w154',
      SM = 'w185',
      MD = 'w342',
      LG = 'w500',
      XL = 'w780',
      SRC = 'original',
    }
  }
}
