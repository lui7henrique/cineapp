import Link from "next/link";
import { MdInfoOutline } from "react-icons/md";

import { MovieType } from "../../../../types/movie";
import { TvType } from "../../../../types/tv";
import * as S from "./styles";

interface IListItemProps {
  item: MovieType | TvType;
  type: "movie" | "tv";
}

export function ListItem({ item, type }: IListItemProps) {
  return (
    <S.Container>
      <S.PosterWrapper>
        <S.Poster
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          layout="fill"
        />
      </S.PosterWrapper>
      <Link href={`${type}/${item.id}`}>
        <a>
          <S.TrailerButton>
            <MdInfoOutline size={30} />
          </S.TrailerButton>
        </a>
      </Link>
    </S.Container>
  );
}
