import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
  width: 100%;
  padding-top: 6rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    div {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 1rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 0;
        &:hover {
          img {
            filter: brightness(0.3);
          }
          p {
            visibility: visible;
            opacity: 1;
          }
        }
        img {
          width: 100%;
          height: 320px;
          border-radius: 5px;
          filter: brightness(0.8);
          transition: all 0.2s ease-in-out;
        }

        p {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: -30px;
          padding: 3px 0.5rem;
          z-index: 2;
          font-weight: bold;
          opacity: 0;
          visibility: hidden;
          transition: visibility 0.2s, opacity 0.2s linear;
        }
      }
    }
  }
`;
