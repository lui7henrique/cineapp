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

export type Credits = {
  cast: Item[];
  crew: Item[];
};

type Item = {
  backdrop_path: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title?: string;
  name?: string;
  character?: string;
  job?: string;
};
