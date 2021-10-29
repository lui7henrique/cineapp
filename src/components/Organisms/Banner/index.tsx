import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { MovieType } from "../../../types/movie";
import { TvType } from "../../../types/tv";
import { FormatNote } from "../../../utils/FormatNote";
import { Button } from "../../Atoms/Button";
import * as S from "./styles";

interface IBannerProps {
  item: MovieType | TvType;
}
export function Banner({ item }: IBannerProps) {
  const note = FormatNote(item.vote_average);
  const noteArray = [];

  for (var i = 0; i < note; i++) {
    noteArray.push(i);
  }

  return (
    <S.Container backdrop_path={item.backdrop_path}>
      <S.Content>
        <S.Title>{item.title}</S.Title>
        <S.Overview>{item.overview}</S.Overview>
        <S.Rating>
          {noteArray.map((note, index) => {
            return <FaStar size={20} key={index} />;
          })}
          <S.RatingValue>({item.vote_count} votos)</S.RatingValue>
        </S.Rating>

        <Link href={`/movie/${item.id}`}>
          <a>
            <Button title="Saiba mais" />
          </a>
        </Link>
      </S.Content>
    </S.Container>
  );
}
