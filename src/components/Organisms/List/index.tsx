import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { useSidebar } from "../../../hooks/useSidebar";
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
  const { sideBarIsMinimized } = useSidebar();
  const [axisX, setAxisX] = useState(0);
  const [isRightArrowEnabled, setIsRightArrowEnabled] = useState(true);
  const [isLeftArrowEnabled, setIsLeftArrowEnabled] = useState(false);

  const handleRightArrowClick = (): void => {
    const totalWidth = window.innerWidth;
    const listWidth = sideBarIsMinimized ? totalWidth - 50 : totalWidth - 300;
    const cardThatMustBePassed = Math.floor(listWidth / 190);
    const cardThatMustBePassedWidth = cardThatMustBePassed * 190;
    const newAxisX = axisX + cardThatMustBePassedWidth;

    newAxisX * 2 >= items.length * 190
      ? (setAxisX(newAxisX), setIsRightArrowEnabled(false))
      : (setAxisX(newAxisX), setIsLeftArrowEnabled(true));
  };

  const handleLeftArrowClick = (): void => {
    const totalWidth = window.innerWidth;
    const listWidth = sideBarIsMinimized ? totalWidth - 50 : totalWidth - 300;
    const cardThatMustBePassed = Math.floor(listWidth / 190);
    const cardThatMustBePassedWidth = cardThatMustBePassed * 190;
    const newAxisX = axisX - cardThatMustBePassedWidth;

    newAxisX <= 0
      ? (setAxisX(newAxisX), setIsLeftArrowEnabled(false))
      : (setAxisX(newAxisX), setIsRightArrowEnabled(true));
  };

  return (
    <S.Container>
      <S.ListTitle>{title}</S.ListTitle>
      {isLeftArrowEnabled && (
        <S.ListControllerLeft>
          <MdExpandMore size={50} onClick={handleLeftArrowClick} />
        </S.ListControllerLeft>
      )}

      <S.ItemsList axisX={axisX}>
        {items.map((item) => {
          return <ListItem item={item} key={item.id} type={type} />;
        })}
      </S.ItemsList>

      {isRightArrowEnabled && (
        <S.ListControllerRight>
          <MdExpandMore size={50} onClick={handleRightArrowClick} />
        </S.ListControllerRight>
      )}
    </S.Container>
  );
}
