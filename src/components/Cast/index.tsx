/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Cast as CastType } from "../../types/credits";
import {
  Container,
  Content,
  ListControllerRight,
  ListControllerLeft,
} from "./styles";

interface IInterfaceProps {
  cast: CastType[];
}

export function Cast({ cast }: IInterfaceProps) {
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
    const listWidth = cast.length * 150;
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
    const listWidth = cast.length * 120;

    if (window.innerWidth - paddingLeft > listWidth) {
      setShowRightArrow(false);
    }
  }, []);

  return (
    <Container>
      <h1>Elenco</h1>
      <Content axisX={axisX}>
        <ListControllerLeft
          className={`list_controller ${!showLeftArrow ? "disabled" : ""}`}
          onClick={handleLeftArrowClick}
        >
          <MdChevronLeft size={40} />
        </ListControllerLeft>
        {cast.map((participant) => {
          return (
            participant.profile_path && (
              <div key={participant.id} className="participant">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${participant.profile_path}`}
                  alt={`${participant.profile_path} image`}
                />
                <div>
                  <p className="name">{participant.name}</p>
                  <p className="character">{participant.character}</p>
                </div>
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
      </Content>
    </Container>
  );
}
