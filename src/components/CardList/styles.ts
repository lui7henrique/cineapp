import styled from "styled-components";

export const Cardlist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1rem;
  }

  section {
    display: flex;
    gap: 1rem;

    > div {
      display: flex;
      flex-direction: column;

      &:hover {
        .infos {
          visibility: visible;
          opacity: 1;
        }
      }
      img {
        width: 310px;
        border-radius: 10px;
        filter: brightness(0.8);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          filter: brightness(0.3);
          transform: scale(1.02);
        }
      }

      .infos {
        display: flex;
        align-items: center;

        justify-content: space-between;
        margin-top: -30px;
        z-index: 99;
        padding: 0 1rem;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;

        > p {
          max-width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 500;
        }

        span {
          display: flex;
          align-items: center;
          gap: 0.2rem;

          svg {
            color: var(--secondary);
          }

          p {
            font-weight: bold;
          }
        }
      }
    }
  }
`;
