/* eslint-disable @next/next/no-img-element */
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { Container } from "./styles";
import { FaStar } from "react-icons/fa";

type HighlightType = {
  movie: MovieType;
  tv: TvType;
};

export function Highlight({ movie, tv }: HighlightType) {
  return (
    <>
      <h2>🔥 Em alta</h2>
      <Container>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          <div></div>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
            alt=""
          />
        </div>
      </Container>
    </>
  );
}
