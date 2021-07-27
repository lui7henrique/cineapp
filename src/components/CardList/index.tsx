/* eslint-disable @next/next/no-img-element */
import { FaStar } from "react-icons/fa";
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { Cardlist } from "./styles";

interface ICardListProps {
  title: string;
  list: MovieType[] | TvType[];
}

export function CardList({ title, list }: ICardListProps) {
  return (
    <Cardlist>
      <h2>{title}</h2>
      <section>
        {list.map((item) => {
          return (
            item.backdrop_path && (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.name}
                />
                <div className="infos">
                  <p>{item.name ? item.name : item.title}</p>
                  <span>
                    <FaStar />
                    <p>{item.vote_average}</p>
                  </span>
                </div>
              </div>
            )
          );
        })}
      </section>
    </Cardlist>
  );
}
