/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Link from "next/link";
import { DetailsType } from "../../types/details";
import { VideosType } from "../../types/videos";
import { Container, Highlight } from "./styles";
import { FormatRuntime } from "../../utils/FormatRuntime";
import { MdPlayArrow } from "react-icons/md";
import { usePlayer } from "../../hooks/usePlayer";
import { VideoPlayer } from "../../components/VideoPlayer";
import { useEffect } from "react";
import { FormatNote } from "../../utils/FormatNote";
import { FaStar } from "react-icons/fa";

type PropsType = {
  details: DetailsType;
  videos: VideosType;
};

export default function Movie({ details, videos }: PropsType) {
  const { showPlayer, hidePlayer, openPlayer } = usePlayer();
  console.log(videos.results[0]);

  return (
    <>
      {showPlayer && (
        <VideoPlayer
          url={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
        />
      )}

      <Container>
        <Highlight backdrop_path={details.backdrop_path}>
          <h1>{details.title}</h1>
          <div>
            <div className="note">
              <FaStar className="completed" size={20} />
              <FaStar className="completed" size={20} />
              <FaStar className="completed" size={20} />
              <FaStar className="completed" size={20} />
              <FaStar size={20} />
              {/* {FormatNote(details.vote_average)} */}
              <p>({details.vote_count} votos)</p>
            </div>
          </div>

          <div className="infos">
            <p>{FormatRuntime(details.runtime)}</p>
            <div>
              {details.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </div>
          </div>

          <div>
            {videos.results[0] && (
              <button className="trailer" onClick={openPlayer}>
                <MdPlayArrow size={25} />
                Trailer
              </button>
            )}
            <button className="watchlist">Adicionar à watchlist</button>
          </div>
        </Highlight>

        {details.adult ? <p>18</p> : <p>livre</p>}

        {/* <img
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        alt={`${details.title}`}
      /> */}
        <p>{details.budget}</p>
        <p>{details.revenue}</p>

        <Link href={details.homepage}>
          <a>
            <p>{details.homepage}</p>
          </a>
        </Link>

        {details.production_companies.map((company) => {
          return (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                alt={company.name}
              />
            </>
          );
        })}

        <p>{details.overview}</p>
        <p>{details.release_date}</p>
        <p>{details.runtime}</p>
        <p>{details.status}</p>
        <p>{details.tagline}</p>
        <p>{details.video}</p>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const details = await fetch(
    `http://api.themoviedb.org/3/movie/${id}?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const videos = await fetch(
    `http://api.themoviedb.org/3/movie/${id}/videos?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  return {
    props: {
      details,
      videos,
    },
  };
};
