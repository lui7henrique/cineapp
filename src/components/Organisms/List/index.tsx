import { MdExpandLess, MdExpandMore } from "react-icons/md";

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
        <S.ListControllerLeft />
        {items.map((item) => {
          return <ListItem item={item} key={item.id} type={type} />;
        })}
        <S.ListControllerRight>
          <MdExpandMore size={50} />
        </S.ListControllerRight>
      </S.ItemsList>
    </S.Container>
  );
}
