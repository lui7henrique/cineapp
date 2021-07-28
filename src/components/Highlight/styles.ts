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

  > div {
    display: flex;
    width: 47.1vw;
    flex-direction: column;

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
