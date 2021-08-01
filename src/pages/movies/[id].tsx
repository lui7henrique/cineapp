/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { DetailsType } from "../../types/details";
import { VideosType } from "../../types/videos";
import { CreditsType } from "../../types/credits";
import { Container, Highlight, Content } from "../../styles/movie";
import { FormatRuntime } from "../../utils/FormatRuntime";
import {
  MdPlayArrow,
  MdAdd,
  MdMoneyOff,
  MdAttachMoney,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { usePlayer } from "../../hooks/usePlayer";
import { VideoPlayer } from "../../components/VideoPlayer";
import { FaStar } from "react-icons/fa";
import { FormatValue } from "../../utils/FormatValue";
import { ProviderType } from "../../types/providers";
import { RecommendationsType } from "../../types/recommendations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormatNote } from "../../utils/FormatNote";
import { DateTime } from "luxon";

type PropsType = {
  details: DetailsType;
  videos: VideosType;
  credits: CreditsType;
  providers: ProviderType;
  recommendations: RecommendationsType;
  similar: RecommendationsType;
};

export default function Movie({
  details,
  videos,
  credits,
  providers,
  recommendations,
  similar,
}: PropsType) {
  const { showPlayer, hidePlayer, openPlayer } = usePlayer();
  const [showRecommendations, updateRecommendations] = useState(6);
  const [showSimilar, updateSimilar] = useState(6);
  const note = FormatNote(details.vote_average);
  const noteArray = [];

  const provider = providers.results.BR;
  useEffect(() => {
    updateRecommendations(6);
    updateSimilar(6);
  }, [recommendations, similar]);

  for (var i = 0; i < note; i++) {
    noteArray.push(i);
    // more statements
  }

  console.log(
    DateTime.now()
      .setZone("America/New_York")
      .minus({ weeks: 1 })
      .endOf("day")
      .toISO()
  );

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
              {noteArray.map((note, index) => {
                return <FaStar className="completed" size={20} key={index} />;
              })}
              <p>({details.vote_count} votos)</p>
            </div>
          </div>

          <div className="finance">
            <div>
              <p>
                <MdMoneyOff size={25} color="#FF3333" />
                {FormatValue(details.budget) === "$0.00"
                  ? "?"
                  : FormatValue(details.budget)}
              </p>
            </div>
            <div>
              <p>
                <MdAttachMoney size={25} color="#52DB6B" />
                {FormatValue(details.revenue) === "$0.00"
                  ? "?"
                  : FormatValue(details.revenue)}
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
            <button className="watchlist">
              <MdAdd size={25} />
            </button>
          </div>
        </Highlight>

        <Content>
          <section>
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
                <h1>Informações</h1>
                <div>
                  <p>
                    <span>Sinopse: </span>
                    {details.overview}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Duração: </span>
                    {FormatRuntime(details.runtime)}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Data de lançamento: </span>
                    {details.release_date}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Genêros: </span>
                    {details.genres.map((genre, index) => {
                      return index !== details.genres.length - 1
                        ? " " + genre.name + ","
                        : " " + genre.name + ".";
                    })}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Elenco:</span>
                    {credits.cast.slice(0, 10).map((participant, index) => {
                      return index !== 9
                        ? " " + participant.name + ","
                        : " " + participant.name + "...";
                    })}
                  </p>
                </div>
              </div>

              {provider && (
                <div className="provider">
                  <h1>Disponível em:</h1>
                  <a href={provider.link} target="_blank" rel="noreferrer">
                    {provider.flatrate
                      ? provider.flatrate.map((item) => {
                          return (
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                              alt=""
                              key={item.provider_id}
                            />
                          );
                        })
                      : provider.rent &&
                        provider.rent.map((item) => {
                          return (
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                              alt=""
                              key={item.provider_id}
                            />
                          );
                        })}
                  </a>
                </div>
              )}
            </main>
          </section>

          <div className="recommendations">
            <h1>Recomendados</h1>
            <div>
              {recommendations.results
                .slice(0, showRecommendations)
                .map((recommendation) => {
                  return (
                    <Link
                      href={`/movies/${recommendation.id}`}
                      key={recommendation.id}
                    >
                      <a>
                        <div className="recommendation">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${recommendation.backdrop_path}`}
                            alt=""
                          />
                          <div>
                            <h1>{recommendation.title}</h1>
                            <p>{recommendation.overview}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="expand">
            {showRecommendations === recommendations.results.length ? (
              <MdExpandLess
                size={40}
                onClick={() => updateRecommendations(6)}
              />
            ) : (
              <MdExpandMore
                size={40}
                onClick={() =>
                  updateRecommendations(
                    showRecommendations + recommendations.results.length - 6
                  )
                }
              />
            )}
          </div>

          <div className="similar">
            <h1>Semelhantes</h1>
            <div>
              {similar.results.slice(0, showSimilar).map((movie) => {
                return (
                  <Link href={`/movies/${movie.id}`} key={movie.id}>
                    <a>
                      <div className="recommendation">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          alt=""
                        />
                        <div>
                          <h1>{movie.title}</h1>
                          <p>{movie.overview}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="expand">
            {showSimilar === similar.results.length ? (
              <MdExpandLess size={40} onClick={() => updateSimilar(6)} />
            ) : (
              <MdExpandMore
                size={40}
                onClick={() =>
                  updateSimilar(showSimilar + similar.results.length - 6)
                }
              />
            )}
          </div>
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

  const providers = await fetch(
    `http://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const recommendations = await fetch(
    `http://api.themoviedb.org/3/movie/${id}/recommendations?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const similar = await fetch(
    `http://api.themoviedb.org/3/movie/${id}/similar?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  return {
    props: {
      details,
      videos,
      credits,
      providers,
      recommendations,
      similar,
    },
  };
};
