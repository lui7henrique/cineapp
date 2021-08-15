/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { FormatNote } from "../../utils/FormatNote";
import { Content, Container } from "./styles";

type HighlightType = {
  movie: MovieType;
  tv: TvType;
};

export function Highlight({ movie, tv }: HighlightType) {
  return (
    <Container>
      <h2>🔥 Em alta</h2>
      <Content>
        <Link href={`/movies/${movie.id}`}>
          <a>
            <div className="item">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.name}
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
          </a>
        </Link>
        <Link href={`/tv/${tv.id}`}>
          <a>
            <div className="item">
              <img
                src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
                alt={movie.name}
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
          </a>
        </Link>
      </Content>
    </Container>
  );
}
