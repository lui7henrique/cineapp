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

  .title {
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 5px;

    > div {
      border-radius: 5px;
      width: 200px;

      div {
        background: var(--shape);
        border: none;
        color: var(--title);
        outline: none;
        border-radius: 5px;
        cursor: pointer;

        &::-webkit-scrollbar {
          width: 5px; /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
          background: var(--shape); /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
          background-color: var(--primary); /* color of the scroll thumb */
          border-radius: 20px; /* roundness of the scroll thumb */
          border: 3px solid var(--primary); /* creates padding around scroll thumb */
        }

        div {
          border-radius: 5px;
          span {
            background: var(--border);
          }
        }
      }
    }
  }
`;
