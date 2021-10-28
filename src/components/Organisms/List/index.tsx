import { MovieType } from "../../../types/movie";
import { TvType } from "../../../types/tv";
import { ListItem } from "./ListItem";
import * as S from "./styles";

interface IListProps {
  items: MovieType[] | TvType[];
  type: "movie" | "tv";
  title: string;
}

export function List({ items, type, title }: IListProps) {
  return (
    <S.Container>
      <S.ListTitle>{title}</S.ListTitle>
      <S.ItemsList>
        {items.map((item) => {
          return <ListItem item={item} key={item.id} type={type} />;
        })}
      </S.ItemsList>
    </S.Container>
  );
}
