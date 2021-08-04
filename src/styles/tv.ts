import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
`;

export const Content = styled.div`
  max-width: 1180px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  main {
    display: flex;
    gap: 2rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    aside {
      .poster {
        border-radius: 5px;
        width: 300px;
        filter: brightness(0.5);
        transition: all 0.2s ease-in;

        &:hover {
          filter: brightness(1);
        }

        @media (max-width: 800px) {
          width: 100%;
        }
      }
    }

    article {
      .providers {
        h1 {
          margin-top: 1rem;
        }

        div {
          display: flex;
          gap: 1rem;

          img {
            width: 50px;
            border-radius: 5px;
          }
        }
      }
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        text-align: justify;
      }

      a {
        transition: all 0.2s ease-in-out;
        &:hover {
          filter: brightness(0.6);
        }
      }

      strong {
        opacity: 0.3;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
  .seasons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      display: flex;
      background-color: var(--shape);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        border-radius: 15px;

        img {
          border-radius: 15px 0 0 15px;
        }
      }

      img {
        max-width: 150px;
        filter: brightness(0.8);
        border-radius: 5px 0 0 5px;
        transition: all 0.2s ease-in;
      }

      .infos {
        display: flex;
        flex-direction: column;
        padding: 1rem;

        p {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
