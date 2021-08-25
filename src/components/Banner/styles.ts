import styled from "styled-components";

type HighlightType = {
  backdrop_path: string;
};

export const Highlight = styled.div<HighlightType>`
  width: 100%;
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    ${(props) =>
      `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: auto;

  @media (max-width: 800px) {
    background-position: 50% 0;
  }

  .tagline {
    margin-top: -0.2rem;
  }

  .infos {
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    margin: auto;
    vertical-align: middle;
    padding: 20vh 1rem 1rem 1rem;

    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
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

    @media (max-width: 500px) {
      font-size: 1rem;
    }

    &.watchlist {
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      color: var(--title);
      cursor: pointer;
      padding: 0.2rem;

      &.delete {
        svg {
          border: 0;
        }
      }

      &:hover {
        p {
          visibility: visible;
          opacity: 1;
        }
      }

      svg {
        border: 3px solid var(--title);
        border-radius: 50%;
      }

      p {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;
      }
    }
  }

  .finance {
    div {
      p {
        display: flex;
        align-items: center;
        font-weight: bold;
      }
    }
  }
`;
