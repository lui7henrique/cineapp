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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-right: 2rem;
    gap: 1rem;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      img {
        width: 350px;
        filter: brightness(0.3);
        border-radius: 5px;
        transition: all 0.2s ease-in;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

        &:hover {
          filter: brightness(0.5);
          box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
            rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
            rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
        }
      }

      .delete {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1rem;
        margin-bottom: -2.5rem;
        z-index: 2;
        padding-right: 2rem;

        svg {
          cursor: pointer;
          transition: all 0.2s ease-in;

          &:hover {
            color: #ff3333;
          }
        }
      }

      .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        padding-bottom: 1rem;
        margin-top: -2.5rem;
        z-index: 2;

        p {
          font-weight: bold;
          max-width: 240px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .md-check {
          transition: background-color 0.2s ease-in;
          border-radius: 50%;
          cursor: pointer;
          margin-right: 1rem;
          &:hover {
            background: var(--primary);
          }
        }

        .md-check-circle {
          transition: background-color 0.2s ease-in;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          margin-right: 1rem;

          &:hover {
            background: none;
          }
        }
      }
    }
  }
`;
