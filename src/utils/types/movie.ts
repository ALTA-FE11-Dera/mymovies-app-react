type GenreType = {
  id?: number;
  name?: string;
};

export interface VideosType {
  id?: string;
  key?: string;
  name?: string;
}
export interface MovieType {
  id?: number;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
  videos?: {
    results: VideosType[];
  };
}
