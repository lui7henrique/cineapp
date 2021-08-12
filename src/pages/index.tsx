/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";

import { CardList } from "../components/CardList";
import { Highlight } from "../components/Highlight";
import { api } from "../services/api";
import { Container, Content } from "../styles/home";
import { MovieType } from "../types/movie";
import { TvType } from "../types/tv";

type HomeProps = {
  popularMovies: MovieType[];
  topRatedMovies: MovieType[];
  popularTv: TvType[];
  topRatedTv: TvType[];
};

export default function Home({
  popularMovies,
  topRatedMovies,
  popularTv,
  topRatedTv,
}: HomeProps) {
  return (
    <Container>
      <title>Cineapp</title>
      <Content>
        <Highlight movie={popularMovies[0]} tv={popularTv[0]} />
        <CardList
          title="🎥 Filmes populares"
          list={popularMovies.slice(1, popularMovies.length)}
          type="movies"
        />
        <CardList
          title="✅ Filmes bem avaliados"
          list={topRatedMovies}
          type="movies"
        />
        <CardList
          title="📺 Séries populares"
          list={popularTv.slice(1, popularTv.length)}
          type="tv"
        />
        <CardList title="✅ Séries bem avaliadas" list={topRatedTv} type="tv" />
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMoviesResponse = await api.get("/movie/popular", {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });
  const popularMovies = popularMoviesResponse.data.results;

  const topRatedMoviesResponse = await api.get("/movie/top_rated", {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });
  const topRatedMovies = topRatedMoviesResponse.data.results;

  const popularTvResponse = await api.get("/tv/popular", {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });
  const popularTv = popularTvResponse.data.results;

  const topRatedTvResponse = await api.get("/tv/top_rated", {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },
  });
  const topRatedTv = topRatedTvResponse.data.results;

  return {
    props: {
      popularMovies,
      topRatedMovies,
      popularTv,
      topRatedTv,
    },
    revalidate: 60 * 60 * 24, //1 day
  };
};
