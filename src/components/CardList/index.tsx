/* eslint-disable @next/next/no-img-element */
import { FaStar } from "react-icons/fa";
import { MovieType } from "../../types/movie";
import { TvType } from "../../types/tv";
import { Cardlist, ListControllerLeft, ListControllerRight } from "./styles";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FormatNote } from "../../utils/FormatNote";
import Link from "next/link";

interface ICardListProps {
  title: string;
  list: MovieType[] | TvType[];
  type: string;
}

export function CardList({ title, list, type }: ICardListProps) {
  const [axisX, setAxisX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const [showRightArrow, setShowRightArrow] = useState(true);

  function handleLeftArrowClick() {
    let x = axisX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
      setShowLeftArrow(false);
    } else {
      setShowRightArrow(true);
    }

    setAxisX(x);
  }

  function handleRightArrowClick() {
    const listWidth = list.length * 309.5;
    let x = axisX - Math.round(window.innerWidth / 2);
    console.log(`x: ${x} e listWidth: ${listWidth}`);

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
    const listWidth = list.length * 309.5;

    if (window.innerWidth - paddingLeft > listWidth) {
      setShowRightArrow(false);
    }
  }, [list.length]);

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
        {list.map((item) => {
          return (
            item.backdrop_path && (
              <div key={item.id} className="movie">
                <Link href={`/${type}/${item.id}`}>
                  <a>
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
                  </a>
                </Link>
              </div>
            )
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
