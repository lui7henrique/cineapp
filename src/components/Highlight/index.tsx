/* eslint-disable @next/next/no-img-element */
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { Content, Container } from "./styles";
import { FaStar } from "react-icons/fa";

type HighlightType = {
  movie: MovieType;
  tv: TvType;
};

export function Highlight({ movie, tv }: HighlightType) {
  return (
    <Container>
      <h2>🔥 Em alta</h2>
      <Content>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          <div className="infos">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>

        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
            alt=""
          />
          <div className="infos">
            <h1>{tv.name}</h1>
            <p>{tv.overview}</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
