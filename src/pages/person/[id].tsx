/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

import { Credits } from "../../components/Credits";
import { api } from "../../services/api";
import { Container, Content } from "../../styles/person";
import { Details, Credits as CreditsType } from "../../types/person/details";

interface IPersonProps {
  details: Details;
  movieCredits: CreditsType;
  tvCredits: CreditsType;
}

export default function Person({
  details,
  movieCredits,
  tvCredits,
}: IPersonProps) {
  console.log(details);
  return (
    <Container>
      <title>{details.name}</title>
      <Content>
        <main>
          <aside>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}
              alt={`Poster ${details.name}`}
            />
          </aside>
          <section>
            <h1>{details.name}</h1>
            <p>{details.biography}</p>
          </section>
        </main>

        <Credits title="Filmes" list={movieCredits} type="movies" />
        <Credits title="Séries" list={tvCredits} type="tv" />
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const { data: details } = await api.get(`/person/${id}`, {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const { data: movieCredits } = await api.get(`person/${id}/movie_credits`, {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const { data: tvCredits } = await api.get(`person/${id}/tv_credits`, {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  return {
    props: { details, movieCredits, tvCredits },
  };
};
