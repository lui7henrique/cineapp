export type MovieType = {
  id: number;
  adult: boolean;
  title: string;
  poster_path: string;
  backdrop_path: string;
  name: string;
  overview: string;
  original_title: string;
  release_date: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
  video: boolean;
  vote_count: number;
};
