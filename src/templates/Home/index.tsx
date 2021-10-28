import { Banner } from "../../components/Banner";
import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { List } from "../../components/Organisms/List";
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { BasicTemplate } from "../BasicTemplate";
import * as S from "./styles";

type HomeTemplateProps = {
  popularMovies: MovieType[];
  topRatedMovies: MovieType[];
  popularTv: TvType[];
  topRatedTv: TvType[];
};

export function HomeTemplate({
  popularMovies,
  topRatedMovies,
  popularTv,
  topRatedTv,
}: HomeTemplateProps) {
  return (
    <BasicTemplate>
      <S.Container>
        <List items={popularMovies} type="movie" title="Filmes populares" />
        <List
          items={topRatedMovies}
          type="movie"
          title="Filmes bem-avaliados"
        />
        <List items={popularTv} type="tv" title="Séries populares" />
        <List items={topRatedTv} type="tv" title="Séries bem-avaliadas" />
        {/* <CardList list={popularMovies} title="Filmes" type="movies" /> */}
      </S.Container>
    </BasicTemplate>
  );
}
