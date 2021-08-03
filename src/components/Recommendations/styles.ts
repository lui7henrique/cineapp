import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .recommendations {
    > h2 {
      margin-bottom: 1rem;
    }
    div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      flex-wrap: wrap;
      gap: 1rem;

      @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .recommendation {
        display: flex;
        flex-direction: column;
        background: var(--shape);
        gap: 0rem;
        border-radius: 5px;
        cursor: pointer;
        filter: brightness(0.7);
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.01);
          filter: brightness(1);
        }

        div {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 0;

          h1 {
            font-size: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        img {
          width: 100%;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }

  .expand {
    align-items: center;

    svg {
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
