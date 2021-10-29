/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";

import { CardList } from "../components/CardList";
import { Highlight } from "../components/Highlight";
import { api } from "../services/api";
import { HomeTemplate } from "../templates/Home";
import { MovieType } from "../types/movie";
import { TvType } from "../types/tv";

type HomeProps = {
  mostPopularMovie: MovieType;
  popularMovies: MovieType[];
  topRatedMovies: MovieType[];
  popularTv: TvType[];
  topRatedTv: TvType[];
};

export default function Home({
  mostPopularMovie,
  popularMovies,
  topRatedMovies,
  popularTv,
  topRatedTv,
}: HomeProps) {
  return (
    <>
      <title>Cineapp</title>
      <NextSeo
        title="Cineapp"
        description="Filmes, séries, atores e watchlists pra quem ama tudo isso! 🖤"
        canonical="https://cineapp.vercel.app/"
        openGraph={{
          url: "https://cineapp.vercel.app/",
          title: "Cineapp",
          description:
            "Filmes, séries, atores e watchlists pra quem ama tudo isso! 🖤",
          images: [
            {
              url: "https://cineapp.vercel.app/img/cover.jpg",
              width: 1920,
              height: 1080,
              alt: "Cineapp",
            },
          ],
        }}
      />
      <HomeTemplate
        mostPopularMovie={mostPopularMovie}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        popularTv={popularTv}
        topRatedTv={topRatedTv}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMoviesResponse = await api.get("/movie/popular");
  const allPopularMovies: MovieType[] = popularMoviesResponse.data.results;
  const popularMovies: MovieType[] = allPopularMovies.slice(
    1,
    allPopularMovies.length
  );

  const mostPopularMovie = allPopularMovies.slice(0, 1)[0];

  const topRatedMoviesResponse = await api.get("/movie/top_rated");
  const topRatedMovies: MovieType[] = topRatedMoviesResponse.data.results;

  const popularTvResponse = await api.get("/tv/popular");
  const popularTv = popularTvResponse.data.results;

  const topRatedTvResponse = await api.get("/tv/top_rated");
  const topRatedTv = topRatedTvResponse.data.results;

  return {
    props: {
      mostPopularMovie,
      popularMovies,
      topRatedMovies,
      popularTv,
      topRatedTv,
    },
    revalidate: 60 * 60 * 24, //1 day
  };
};
