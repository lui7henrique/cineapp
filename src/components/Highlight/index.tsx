/* eslint-disable @next/next/no-img-element */
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { Content, Container } from "./styles";
import { FaStar } from "react-icons/fa";
import { FormatNote } from "../../utils/FormatNote";

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
            <div>
              <h1>{movie.title} </h1>
              <span>
                <FaStar size={30} />
                {FormatNote(movie.vote_average)}
              </span>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>

        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
            alt=""
          />
          <div className="infos">
            <div>
              <h1>{tv.name}</h1>
              <span>
                <FaStar size={30} />
                {FormatNote(tv.vote_average)}
              </span>
            </div>
            <p>{tv.overview}</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
