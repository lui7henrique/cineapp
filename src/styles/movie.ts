import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
`;

type HighlightType = {
  backdrop_path: string;
};

export const Highlight = styled.div<HighlightType>`
  width: 100%;
  height: 50vh;
  padding: 5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(props) =>
      `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`};
  /* background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`}; */
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .note {
    display: flex;
    gap: 2px;

    svg {
      &.completed {
        color: var(--secondary);
      }
    }

    p {
      opacity: 0.7;
    }
  }

  .infos {
    margin-top: 1rem;

    p {
      padding-right: 1rem;
      border-right: 1.5px solid var(--title);
    }

    div {
      span {
        margin-right: 1rem;

        &::after {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;
          transform: translate(150%, 250%);
        }
      }
    }
  }

  button {
    border: none;
    outline: none;
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.2s ease-in;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    font-size: 1.2rem;
    margin-top: 30px;
    display: flex;
    align-items: center;

    &.trailer {
      background: var(--primary);
      color: var(--title);

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        margin-right: 0.5rem;
      }
    }

    &.watchlist {
      background: none;
      border: 2px solid var(--title);
      color: var(--title);
      cursor: not-allowed;
      padding: 0.5rem 1.5rem;
    }
  }
`;
