/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { DetailsType } from "../../types/details";
import { VideosType } from "../../types/videos";
import { CreditsType } from "../../types/credits";
import { Container, Highlight, Content } from "../../styles/movie";
import { FormatRuntime } from "../../utils/FormatRuntime";
import { MdPlayArrow, MdAdd, MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { usePlayer } from "../../hooks/usePlayer";
import { VideoPlayer } from "../../components/VideoPlayer";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FormatValue } from "../../utils/FormatValue";

type PropsType = {
  details: DetailsType;
  videos: VideosType;
  credits: CreditsType;
};

export default function Movie({ details, videos, credits }: PropsType) {
  const { showPlayer, hidePlayer, openPlayer } = usePlayer();
  const [test, updateTest] = useState(20);
  console.log(videos.results[0]);

  return (
    <>
      <title>{details.title}</title>
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
            <p>{details.release_date}</p>
            <div>
              {details.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </div>
          </div>

          <div className="finance">
            <div>
              <p>
                <MdMoneyOff size={25} color="#FF3333" />
                {FormatValue(details.budget)}
              </p>
            </div>
            <div>
              <p>
                <MdAttachMoney size={25} color="#52DB6B" />
                {FormatValue(details.revenue)}
              </p>
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

        <Content>
          <div className="details">
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt=""
              className="poster"
            />

            <a href={details.homepage} target="_blank" rel="noreferrer">
              <button>
                <p>Página oficial</p>
              </button>
            </a>
          </div>

          <main className="hero">
            <div>
              <div>
                <h1>Sinopse</h1>
              </div>
              <p>{details.overview}</p>
            </div>

            <div className="cast">
              <div>
                <h1>Elenco</h1>
              </div>
              <div className="participants_list">
                {credits.cast.slice(0, test).map((participant) => {
                  return participant.profile_path ? (
                    <div className="participant" key={participant.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${participant.profile_path}`}
                        alt=""
                      />
                      <p>{participant.name}</p>
                      <span>
                        {participant.character ? participant.character : "?"}
                      </span>
                    </div>
                  ) : (
                    <div className="empty_participant" key={participant.id}>
                      <div className="emptyImg" />
                      <p>{participant.name}</p>
                      <span>
                        {participant.character ? participant.character : "?"}
                      </span>
                    </div>
                  );
                })}
                {test >= credits.cast.length ? (
                  <button onClick={() => updateTest(20)}>
                    <IoMdEyeOff size={40} />
                  </button>
                ) : (
                  <button onClick={() => updateTest(test + 20)}>
                    <MdAdd size={40} />
                  </button>
                )}
              </div>
            </div>
          </main>
        </Content>
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

  const credits = await fetch(
    `http://api.themoviedb.org/3/movie/${id}/credits?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  return {
    props: {
      details,
      videos,
      credits,
    },
  };
};
