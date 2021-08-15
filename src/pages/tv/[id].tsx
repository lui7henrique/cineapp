/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { parseISO, format } from "date-fns";
import brazilLocale from "date-fns/locale/pt";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";

import { Banner } from "../../components/Banner";
import { Recommendations } from "../../components/Recommendations";
import { Similar } from "../../components/Similar";
import { api } from "../../services/api";
import { Container, Content } from "../../styles/tv";
import { ProviderType } from "../../types/providers";
import { DetailsTV } from "../../types/tv/details";
import { VideosType } from "../../types/videos";

interface ITVProps {
  details: DetailsTV;
  videos?: VideosType;
  recommendations: any;
  similar: any;
  season: any;
  providers: ProviderType;
}

export default function TV({
  details,
  videos,
  recommendations,
  similar,
  season,
  providers,
}: ITVProps) {
  const provider = providers.results.BR;

  return (
    <>
      <title>{details.name}</title>
      <NextSeo
        title={details.name}
        description={`${details.overview.slice(0, 100)}...`}
        canonical={`https://cineapp.vercel.app/tv/${details.id}`}
        openGraph={{
          url: `https://cineapp.vercel.app/tv/${details.id}`,
          title: details.name,
          description: `${details.overview.slice(0, 100)}...`,
          images: [
            {
              url: `https://image.tmdb.org/t/p/original/${details.backdrop_path}`,
              width: 1280,
              height: 720,
              alt: details.name,
            },
          ],
        }}
      />
      <Container>
        <Banner
          backdrop_path={details.backdrop_path}
          title={details.name}
          vote_average={details.vote_average}
          vote_count={details.vote_count}
          videos={videos}
          seasons={details.number_of_seasons}
          episodes={details.number_of_episodes}
          tagline={details.tagline}
          id={details.id}
          poster_path={details.poster_path}
          type="tv"
        />
        <Content>
          <main>
            <aside>
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt={details.name}
                className="poster"
              />
            </aside>

            <article>
              <h1>Informações</h1>
              <section>
                <p>
                  <strong>Sinopse: </strong>
                  {details.overview}
                </p>
                <p>
                  <strong>Criador por: </strong>
                  {details.created_by.map((author, index) => {
                    return (
                      <Link href={`/person/${author.id}`} key={author.id}>
                        <a>
                          {index === details.created_by.length - 1
                            ? author.name + "."
                            : "" + author.name + ", "}
                        </a>
                      </Link>
                    );
                  })}
                </p>
                <p>
                  <strong>Genêros: </strong>
                  {details.genres.map((genre, index) => {
                    return index === details.genres.length - 1
                      ? genre.name + "."
                      : "" + genre.name + ", ";
                  })}
                </p>
                <p>
                  <strong>Lançamento: </strong>
                  {details.first_air_date !== null &&
                    format(
                      parseISO(details.first_air_date),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: brazilLocale,
                      }
                    )}
                </p>
                <p>
                  <strong>Produtora: </strong>
                  {details.production_companies[0].name}
                </p>
              </section>
              <section className="providers">
                <h1>Onde assistir? </h1>

                {provider && (
                  <div className="provider">
                    <div>
                      {provider.flatrate &&
                        provider.flatrate.map((item) => {
                          return (
                            <a
                              href={providers.results.BR.link}
                              target="_blank"
                              rel="noreferrer"
                              key={item.provider_id}
                            >
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                                alt={item.provider_name}
                              />
                            </a>
                          );
                        })}
                    </div>
                  </div>
                )}
              </section>
            </article>
          </main>
          <article className="seasons">
            <h1>Temporadas</h1>
            {details.seasons.map((season) => {
              return (
                <div key={season.id}>
                  {season.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                      alt={season.name}
                    />
                  ) : (
                    <img
                      src="https://i.ibb.co/k6QMQ8T/Screenshot-7.jpg"
                      alt=""
                    />
                  )}
                  <div className="infos">
                    <h2>{season.name}</h2>
                    {season.overview !== "" ? (
                      <p>{season.overview}</p>
                    ) : (
                      <p>Sem informações sobre 🙁</p>
                    )}
                  </div>
                </div>
              );
            })}
          </article>
          {recommendations.results.length > 1 && (
            <Recommendations recommendations={recommendations} type="tv" />
          )}
          {similar.results.length > 1 && (
            <Similar similar={similar} type="tv" />
          )}
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const { data: details } = await api.get(`/tv/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

  const { data: videos } = await api.get(`tv/${id}/videos`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

  const { data: credits } = await api.get(`tv/${id}/credits`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

  const { data: providers } = await api.get(`tv/${id}/watch/providers`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

  const { data: recommendations } = await api.get(`tv/${id}/recommendations`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

  const { data: similar } = await api.get(`tv/${id}/similar`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });

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
