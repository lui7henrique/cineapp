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
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;

    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
    }

    aside {
      &:hover {
        img {
          box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
            rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
            rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        transition: all 0.2s ease-in-out;
      }
    }

    section {
      div {
        display: flex;
        align-items: flex-end;
        gap: 0.1rem;
      }
    }
  }
`;
