/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { Banner } from "../../components/Banner";
import { Container, Content } from "../../styles/tv";
import { Recommendations } from "../../components/Recommendations";
import { DetailsTV } from "../../types/tv/details";
import { VideosType } from "../../types/videos";
import { Similar } from "../../components/Similar";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import brazilLocale from "date-fns/locale/pt";

interface ITVProps {
  details: DetailsTV;
  videos?: VideosType;
  recommendations: any;
  similar: any;
  season: any;
}

export default function TV({
  details,
  videos,
  recommendations,
  similar,
  season,
}: ITVProps) {
  console.log(season);

  const release = parseISO(details.first_air_date);
  const formattedRelease = format(release, "dd 'de' MMMM 'de' yyyy", {
    locale: brazilLocale,
  });

  return (
    <Container>
      <title>{details.name}</title>

      <Banner
        backdrop_path={details.backdrop_path}
        title={details.name}
        vote_average={details.vote_average}
        vote_count={details.vote_count}
        videos={videos}
        seasons={details.number_of_seasons}
        episodes={details.number_of_episodes}
        tagline={details.tagline}
      />
      <Content>
        <main>
          <aside>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt=""
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
                    <Link href={`/name/${author.id}`} key={author.id}>
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
                {formattedRelease}
              </p>
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
                    alt=""
                  />
                ) : (
                  <img src="https://i.ibb.co/k6QMQ8T/Screenshot-7.jpg" alt="" />
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
        {similar.results.length > 1 && <Similar similar={similar} type="tv" />}
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const details = await fetch(
    `http://api.themoviedb.org/3/tv/${id}?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const videos = await fetch(
    `http://api.themoviedb.org/3/tv/${id}/videos?api_key=90f2b425e5ff1b801ed9dccf4bafadde`
  ).then((res) => res.json());

  const credits = await fetch(
    `http://api.themoviedb.org/3/tv/${id}/credits?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const providers = await fetch(
    `http://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const recommendations = await fetch(
    `http://api.themoviedb.org/3/tv/${id}/recommendations?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
  ).then((res) => res.json());

  const similar = await fetch(
    `http://api.themoviedb.org/3/tv/${id}/similar?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR`
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
