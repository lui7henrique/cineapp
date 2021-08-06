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

      @media (max-width: 1980px) {
        grid-template-columns: repeat(8, 1fr);
      }

      @media (max-width: 1600px) {
        grid-template-columns: repeat(7, 1fr);
      }

      @media (max-width: 1440px) {
        grid-template-columns: repeat(6, 1fr);
      }

      @media (max-width: 1280px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media (max-width: 1080px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        padding-right: 1.5rem;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0;
        &:hover {
          img {
            filter: brightness(0.3);
            box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
              rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
              rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
          }
          p {
            visibility: visible;
            opacity: 1;
          }
        }
        img {
          width: 100%;
          height: 320px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
            rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
            rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
          border-radius: 5px;
          filter: brightness(0.8);
          transition: all 0.2s ease-in-out;

          @media (max-width: 500px) {
            width: 110%;
          }
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
