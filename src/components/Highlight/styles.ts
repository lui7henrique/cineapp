import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  max-width: 100vw;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    padding-right: 2rem;
  }

  > div {
    display: flex;
    width: 47.1vw;
    flex-direction: column;

    @media (max-width: 1024px) {
      width: 100%;
    }

    &:first-child {
      margin-right: 2rem;
    }

    &:hover {
      .infos {
        visibility: visible;
        opacity: 1;
      }
    }
    img {
      border-radius: 5px;
      filter: brightness(0.8);
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        filter: brightness(0.5);
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      margin-top: -100px;
      margin-bottom: 20px;
      z-index: 99;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.2s, opacity 0.2s linear;

      div {
        display: flex;
        justify-content: space-between;

        span {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          gap: 0.2rem;

          svg {
            color: var(--secondary);
          }
        }
      }

      h1 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        display: -webkit-box;
        -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
