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
    padding-right: 1rem;
    gap: 1rem;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
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

        &:hover {
          filter: brightness(0.5);
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
