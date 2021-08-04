import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { CardList } from "../../components/CardList";
import { api } from "../../services/api";
import { Container, Content } from "../../styles/home";

type SimpleMovie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  name: string;
  overview: string;
  vote_average: number;
};

interface IMoviesProps {
  trending: SimpleMovie[];
  nowPlaying: SimpleMovie[];
  topRated: SimpleMovie[];
  upComing: SimpleMovie[];
  action: SimpleMovie[];
  adventure: SimpleMovie[];
  animation: SimpleMovie[];
  comedy: SimpleMovie[];
  crime: SimpleMovie[];
  documentary: SimpleMovie[];
  drama: SimpleMovie[];
  family: SimpleMovie[];
  fantasy: SimpleMovie[];
  history: SimpleMovie[];
  horror: SimpleMovie[];
  mistery: SimpleMovie[];
  romance: SimpleMovie[];
  sciFi: SimpleMovie[];
  western: SimpleMovie[];
}

export default function Movies({
  trending,
  nowPlaying,
  topRated,
  upComing,
  action,
  adventure,
  animation,
  comedy,
  crime,
  documentary,
  drama,
  family,
  fantasy,
  history,
  horror,
  mistery,
  romance,
  sciFi,
  western,
}: IMoviesProps) {
  const [genre, setGenre] = useState();

  // function handleSearchByGenre(e: FormEvent) {
  //   e.preventDefault();
  //   // router.push(`genre/${genre}`);
  // }

  return (
    <Container>
      <title>Cineapp | Filmes</title>
      <Content>
        <h1>Filmes</h1>
        <CardList list={trending} title="🔥 Tendência" type="movies" />
        <CardList list={topRated} title="👌 Bem avaliados" type="movies" />
        <CardList list={upComing} title="⏳ Em breve" type="movies" />
        <CardList list={action} title="👊 Ação" type="movies" />
        <CardList list={adventure} title="🌍 Aventura" type="movies" />
        <CardList list={animation} title="💡 Animação" type="movies" />
        <CardList list={comedy} title="🤣 Comédia" type="movies" />
        <CardList list={crime} title="🚔 Crime" type="movies" />
        <CardList list={documentary} title="📄 Documentário" type="movies" />
        <CardList list={drama} title="🎭 Drama" type="movies" />
        <CardList list={family} title="👪 Família" type="movies" />
        <CardList list={fantasy} title="👻 Fantasia" type="movies" />
        <CardList list={history} title="🛕 História" type="movies" />
        <CardList list={horror} title="😱 Terror" type="movies" />
        <CardList list={mistery} title="🤔 Mistério" type="movies" />
        <CardList list={romance} title="🌹 Romance" type="movies" />
        <CardList list={sciFi} title="👨‍🔬 Ficção científica" type="movies" />
        <CardList list={western} title="🌵 Faroeste" type="movies" />
        {/* hidden because it repeats movies
        <CardList list={nowPlaying} title="⌚ Filmes atuais" type="movies" /> */}
      </Content>
    </Container>
  );
}

async function getMoviesByGenreId(genreId: number) {
  const response = await api.get("/discover/movie", {
    params: {
      api_key: process.env.IMBD_KEY,
      with_genres: genreId,
      "release_date.lte": new Date(),
      sort_by: "popularity.desc",
      page: Math.floor(Math.random() * 10) + 1,
      language: "pt-BR",
    },
  });

  const movie = response.data.results.map((item: any) => {
    return {
      id: String(item.id),
      title: item.title,
      poster_path: item.poster_path,
      overview: item.overview,
      backdrop_path: item.backdrop_path,
      vote_average: item.vote_average,
    };
  });

  return movie;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const trendingResponse = await api.get("/trending/movie/week", {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const trending = trendingResponse.data.results.map((movie: any) => {
    return {
      id: String(movie.id),
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
    };
  });

  const nowPlayingResponse = await api.get("/movie/now_playing", {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const nowPlaying = nowPlayingResponse.data.results.map((movie: any) => {
    return {
      id: String(movie.id),
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
    };
  });

  const topRatedResponse = await api.get("/movie/top_rated", {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const topRated = topRatedResponse.data.results.map((movie: any) => {
    return {
      id: String(movie.id),
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
    };
  });

  const upComingResponse = await api.get("/movie/upcoming", {
    params: {
      api_key: process.env.IMBD_KEY,
      language: "pt-BR",
    },
  });

  const upComing = upComingResponse.data.results.map((movie: any) => {
    return {
      id: String(movie.id),
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
    };
  });

  const action = await getMoviesByGenreId(28);
  const adventure = await getMoviesByGenreId(12);
  const animation = await getMoviesByGenreId(16);
  const comedy = await getMoviesByGenreId(35);
  const crime = await getMoviesByGenreId(80);
  const documentary = await getMoviesByGenreId(99);
  const drama = await getMoviesByGenreId(18);
  const family = await getMoviesByGenreId(10751);
  const fantasy = await getMoviesByGenreId(14);
  const history = await getMoviesByGenreId(36);
  const horror = await getMoviesByGenreId(27);
  const mistery = await getMoviesByGenreId(9648);
  const romance = await getMoviesByGenreId(10749);
  const sciFi = await getMoviesByGenreId(878);
  const western = await getMoviesByGenreId(37);

  return {
    props: {
      trending,
      nowPlaying,
      topRated,
      upComing,
      action,
      adventure,
      animation,
      comedy,
      crime,
      documentary,
      drama,
      family,
      fantasy,
      history,
      horror,
      mistery,
      romance,
      sciFi,
      western,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
