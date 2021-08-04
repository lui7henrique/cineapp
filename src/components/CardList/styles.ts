import styled from "styled-components";

interface CardListProps {
  axisX: number;
}

export const Cardlist = styled.div<CardListProps>`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
  }

  section {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: ${(props) => props.axisX}px;
    transition: all 0.3s ease;
    width: 100vw;

    &:hover {
      .list_controller {
        opacity: 1;
      }
    }

    @media (max-width: 1120px) {
      padding-right: 0;
      overflow-x: auto;
      margin: 0;
      padding-right: 2rem;

      &::-webkit-scrollbar {
        display: none;
      }

      .list_controller {
        display: none;
      }
    }

    .list_controller {
      position: absolute;
      padding: 0.2rem;

      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease-in;
      border-radius: 50%;

      svg {
        color: var(--title);
      }
    }

    .movie {
      display: flex;
      flex-direction: column;
      border-radius: 6px;

      &:hover {
        .infos {
          visibility: visible;
          opacity: 1;
        }
        img {
          filter: brightness(0.3);
        }
      }

      img {
        width: 295px;
        border-radius: 5px;
        filter: brightness(0.8);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }

      .infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -30px;
        z-index: 2;
        padding: 0 1rem;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;

        > p {
          max-width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 500;
        }

        span {
          display: flex;
          align-items: center;
          gap: 0.2rem;

          svg {
            color: var(--secondary);
          }

          p {
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export const ListControllerLeft = styled.div`
  left: 0;

  &.disabled {
    display: none;
  }
`;

export const ListControllerRight = styled.div`
  right: 0;

  &.disabled {
    display: none;
  }
`;
