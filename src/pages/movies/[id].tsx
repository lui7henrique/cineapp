/* eslint-disable @next/next/no-img-element */

import { parseISO, format } from "date-fns";
import brazilLocale from "date-fns/locale/pt";
import { GetServerSideProps } from "next";
import Link from "next/link";

import { Banner } from "../../components/Banner";
import { Recommendations } from "../../components/Recommendations";
import { Similar } from "../../components/Similar";
import { Container, Content } from "../../styles/movie";
import { CreditsType } from "../../types/credits";
import { DetailsType } from "../../types/details";
import { ProviderType } from "../../types/providers";
import { VideosType } from "../../types/videos";
import { FormatNote } from "../../utils/FormatNote";
import { FormatRuntime } from "../../utils/FormatRuntime";

type PropsType = {
  details: DetailsType;
  videos: VideosType;
  credits: CreditsType;
  providers: ProviderType;
  recommendations: any;
  similar: any;
};

export default function Movie({
  details,
  videos,
  credits,
  providers,
  recommendations,
  similar,
}: PropsType) {
  const note = FormatNote(details.vote_average);
  const noteArray = [];

  const provider = providers.results.BR;
  for (var i = 0; i < note; i++) {
    noteArray.push(i);
  }

  const date = parseISO(details.release_date);
  const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: brazilLocale,
  });

  return (
    <>
      <title>{details.title}</title>

      <Container>
        <Banner
          backdrop_path={details.backdrop_path}
          title={details.title}
          budget={details.budget}
          revenue={details.revenue}
          vote_average={details.vote_average}
          vote_count={details.vote_count}
          videos={videos}
          tagline={details.tagline}
          id={details.id}
          poster_path={details.poster_path}
          type="movie"
        />

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
                    {formattedDate}
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
                      return (
                        <Link
                          href={`/person/${participant.id}`}
                          key={participant.id}
                        >
                          <a>
                            {index !== 9
                              ? " " + participant.name + ","
                              : " " + participant.name + "..."}
                          </a>
                        </Link>
                      );
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

          {recommendations.results.length > 1 && (
            <Recommendations recommendations={recommendations} type="movies" />
          )}
          {similar.results.length > 1 && (
            <Similar similar={similar} type="movies" />
          )}
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
