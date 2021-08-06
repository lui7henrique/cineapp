/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { FormatNote } from "../../utils/FormatNote";
import { Cardlist, ListControllerLeft, ListControllerRight } from "./styles";

interface ICardListProps {
  title: string;
  list: MovieType[] | TvType[];
  type: "movies" | "tv";
}

export function CardList({ title, list, type }: ICardListProps) {
  const [axisX, setAxisX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const [showRightArrow, setShowRightArrow] = useState(true);

  const filteredList = list.filter((item) => item.backdrop_path !== null);

  function handleLeftArrowClick() {
    let x = axisX + Math.round(window.innerWidth / 2);

    if (x >= 0) {
      x = 0;
      setShowLeftArrow(false);
    } else {
      setShowRightArrow(true);
    }

    setAxisX(x);
  }

  function handleRightArrowClick() {
    const listWidth = filteredList.length * 310;
    let x = axisX - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listWidth > x) {
      const blankSpace = window.innerWidth > 800 ? 80 : 16;

      x = window.innerWidth - listWidth - blankSpace;
      setShowRightArrow(false);
    } else {
      setShowLeftArrow(true);
    }

    setAxisX(x);
  }

  useEffect(() => {
    const paddingLeft = window.innerWidth > 800 ? 80 : 28;
    const listWidth = filteredList.length * 310;

    if (window.innerWidth - paddingLeft > listWidth) {
      setShowRightArrow(false);
    }
  }, [filteredList.length]);

  return (
    <Cardlist axisX={axisX}>
      <h2>{title}</h2>
      <section>
        <ListControllerLeft
          className={`list_controller ${!showLeftArrow ? "disabled" : ""}`}
          onClick={handleLeftArrowClick}
        >
          <MdChevronLeft size={40} />
        </ListControllerLeft>
        {filteredList.map((item) => {
          return item.backdrop_path ? (
            <Link href={`/${type}/${item.id}`} key={item.id}>
              <a>
                <div className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={item.name}
                  />
                  <div className="infos">
                    <p>{item.name ? item.name : item.title}</p>
                    <span>
                      <FaStar size={15} />
                      <p>{FormatNote(item.vote_average)}</p>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ) : (
            <Link href={`/${type}/${item.id}`} key={item.id}>
              <a>
                <div className="movie">
                  <img
                    src="https://i.ibb.co/2dkrb1N/Screenshot-6.jpg"
                    alt={item.name}
                  />
                  <div className="infos">
                    <p>{item.name ? item.name : item.title}</p>
                    <span>
                      <FaStar size={15} />
                      <p>{FormatNote(item.vote_average)}</p>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
        <ListControllerRight
          className={`list_controller ${!showRightArrow ? "disabled" : ""}`}
          onClick={handleRightArrowClick}
        >
          <MdChevronRight size={40} />
        </ListControllerRight>
      </section>
    </Cardlist>
  );
}
