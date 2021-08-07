/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { MovieCredits, TvCredits } from "../../types/person/details";
import { Container, Content } from "./styles";

interface ICreditsProps {
  title: "Filmes" | "Séries";
  list: MovieCredits | TvCredits;
  type: "movies" | "tv";
}

export function Credits({ title, list, type }: ICreditsProps) {
  const [targetsCast, updateTargetsCast] = useState(8);
  const [targetsCrew, updateTargetsCrew] = useState(8);
  return (
    <Container>
      <h1>{title}</h1>
      <Content>
        {list.cast.slice(0, targetsCast).map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/${type}/${item.id}`}>
                <a>
                  {item.backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://i.ibb.co/2dkrb1N/Screenshot-6.jpg"
                      alt=""
                    />
                  )}
                </a>
              </Link>
              <div className="infos">
                <p className="title">{item.name ?? item.title}</p>
                <p className="character">{item.character}</p>
              </div>
            </div>
          );
        })}
      </Content>
      <div className="expand">
        {targetsCast === list.cast.length ? (
          <MdExpandMore
            size={40}
            onClick={() => updateTargetsCast(8)}
            className="less"
          />
        ) : (
          <MdExpandMore
            size={40}
            onClick={() =>
              updateTargetsCast(targetsCast + list.cast.length - 8)
            }
          />
        )}
      </div>
    </Container>
  );
}
