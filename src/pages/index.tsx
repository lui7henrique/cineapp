/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { CardList } from "../components/CardList";
import { MovieType } from "../types/movie";
import { TvType } from "../types/tv";
import { Container, Content } from "../styles/home";
import { Highlight } from "../components/Highlight";

export const getStaticProps: GetStaticProps = async () => {
  const popular = await fetch(
    "http://api.themoviedb.org/3/movie/popular?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR"
  ).then((res) => res.json());

  const topRated = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR"
  ).then((res) => res.json());

  const popularTV = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR"
  ).then((res) => res.json());

  const topRatedTV = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=90f2b425e5ff1b801ed9dccf4bafadde"
  ).then((res) => res.json());

  const upComing = await fetch(
    "http://api.themoviedb.org/3/movie/upcoming?api_key=90f2b425e5ff1b801ed9dccf4bafadde&language=pt-BR"
  ).then((res) => res.json());

  return {
    props: {
      popular,
      topRated,
      popularTV,
      topRatedTV,
      upComing,
    },
    revalidate: 60 * 60 * 24, //1 day
  };
};

export default function Home({
  popular,
  topRated,
  popularTV,
  topRatedTV,
  upComing,
}: any) {
  const popularMovies: MovieType[] = popular.results;
  const topRatedMovies: MovieType[] = topRated.results;
  const popularTv: TvType[] = popularTV.results;
  const topRatedTv: TvType[] = topRatedTV.results;
  const upComingList: MovieType[] = upComing.results;

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
        <CardList title="💬 Em breve" list={upComingList} type="movies" />
        <CardList
          title="📺 Séries populares"
          list={popularTv.slice(1, popularMovies.length)}
          type="tv"
        />
        <CardList title="✅ Séries bem avaliadas" list={topRatedTv} type="tv" />
      </Content>
    </Container>
  );
}
