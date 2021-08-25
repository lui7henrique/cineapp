/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { Credits as CreditsType } from "../../types/person/details";
import { Container, Content } from "./styles";

interface ICreditsProps {
  title: "Filmes" | "Séries";
  list: CreditsType;
  type: "movies" | "tv";
}

export function Credits({ title, list, type }: ICreditsProps) {
  const [targetsCast, updateTargetsCast] = useState(8);
  const [targetsCrew, updateTargetsCrew] = useState(8);

  const cast = list.cast;
  const filteredCast = cast.filter(
    (item: any) => item.backdrop_path !== null && item.character !== ""
  );

  const crew = list.crew;
  const filteredCrew = crew.filter(
    (item: any) => item.backdrop_path !== null && item.character !== ""
  );

  return (
    <Container>
      {filteredCast.length > 1 && (
        <h1>
          {title} {title === "Filmes" ? "atuados" : "atuadas"}
        </h1>
      )}
      <Content>
        {filteredCast.length > 1 &&
          filteredCast.slice(0, targetsCast).map((item) => {
            return (
              <div key={item.id}>
                <Link href={`/${type}/${item.id}`}>
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt={item.name}
                    />
                  </a>
                </Link>
                <div
                  className={`infos ${item.character ? "no-character" : ""}`}
                >
                  <p className="title">{item.name ?? item.title}</p>
                  <p className="character">{item.character ?? item.job}</p>
                </div>
              </div>
            );
          })}
      </Content>
      {filteredCast.length > 1 && !(filteredCast.length <= 8) && (
        <div className="expand">
          {targetsCast === filteredCast.length ? (
            <MdExpandMore
              size={40}
              onClick={() => updateTargetsCast(8)}
              className="less"
            />
          ) : (
            <MdExpandMore
              size={40}
              onClick={() =>
                updateTargetsCast(targetsCast + filteredCast.length - 8)
              }
            />
          )}
        </div>
      )}
      {filteredCrew.length > 1 && (
        <h1>
          {title} {title === "Filmes" ? "dirigidos" : "dirigidas"}
        </h1>
      )}
      <Content>
        {filteredCrew.length > 1 &&
          filteredCrew.slice(0, targetsCrew).map((item) => {
            return (
              <div key={item.id}>
                <Link href={`/${type}/${item.id}`}>
                  <a>
                    {item.backdrop_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt={item.name}
                      />
                    ) : (
                      <img
                        src="https://i.ibb.co/2dkrb1N/Screenshot-6.jpg"
                        alt="Undefined"
                      />
                    )}
                  </a>
                </Link>
                <div className="infos">
                  <p className="title crew">{item.name ?? item.title}</p>
                  <p className="character">{item.character ?? item.job}</p>
                </div>
              </div>
            );
          })}
      </Content>
      {filteredCrew.length > 1 && !(filteredCrew.length <= 8) && (
        <div className="expand">
          {targetsCrew === filteredCrew.length ? (
            <MdExpandMore
              size={40}
              onClick={() => updateTargetsCrew(8)}
              className="less"
            />
          ) : (
            <MdExpandMore
              size={40}
              onClick={() =>
                updateTargetsCrew(targetsCrew + filteredCrew.length - 8)
              }
            />
          )}
        </div>
      )}
    </Container>
  );
}
