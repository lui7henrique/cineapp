export type Details = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday?: string;
  gender: number;
  homepage?: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type MovieCredits = {
  cast: MovieItem[];
  crew: MovieItem[];
};

export type TvCredits = {
  cast: TvItem[];
  crew: TvItem[];
};

type MovieItem = {
  adult: false;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  video: false;
  vote_average: 6;
  vote_count: number;
};

interface TvItem extends Omit<MovieItem, "adult"> {
  name: string;
  character: string;
  credit_id: string;
  episode_count: number;
  first_air_date: string;
  origin_country: string;
}
