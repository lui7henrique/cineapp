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
  padding: 10rem 5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    ${(props) =>
      `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`};
  /* background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`}; */
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 500px) {
    padding: 10rem 2.5rem;
    .infos,
    .finance {
      display: none;
    }
  }

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
      }
      span + span::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #ddd;
        position: absolute;
        transform: translate(-250%, 250%);
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

    @media (max-width: 500px) {
      font-size: 1rem;
    }

    &.watchlist {
      background: none;
      border: 2px solid var(--title);
      color: var(--title);
      cursor: not-allowed;
      padding: 0.5rem 1.5rem;
      @media (max-width: 500px) {
        padding: 0.7rem 1.5rem;
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

export const Content = styled.div`
  padding: 3rem 5rem;
  display: flex;

  gap: 3rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .poster {
    border-radius: 5px;
    width: 300px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .company {
    width: 100px;
  }

  .details {
    max-width: 300px;
    button {
      width: 100%;
      width: 100%;
      border: none;
      outline: none;
      background: var(--primary);
      color: var(--title);
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
      margin-top: 1rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    div {
      h1 {
        margin-right: 1rem;
        margin-bottom: 0.5rem;
      }

      div {
        display: flex;
        align-items: center;
      }
    }

    p {
      line-height: 1.5rem;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .video {
    h1 {
      margin-bottom: 0.5rem;
    }
  }
`;
