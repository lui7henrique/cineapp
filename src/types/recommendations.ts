import { MovieType } from "./movie";

export type RecommendationsType = {
  page: number;
  results: MovieType[];
};
