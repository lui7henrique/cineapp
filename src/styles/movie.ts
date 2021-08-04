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

  section {
    display: flex;

    @media (max-width: 500px) {
      flex-direction: column;
    }
    gap: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .poster {
    border-radius: 5px;
    width: 300px;
    opacity: 0.5;
    transition: all 0.2s ease-in;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .details {
    button {
      width: 100%;
      width: 100%;
      border: none;
      outline: none;
      background: var(--primary);
      color: var(--title);
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      line-height: 1.5rem;

      .release_date {
        margin-left: 1rem;
      }

      span {
        opacity: 0.3;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    a {
      transition: all 0.2s ease-in-out;
      &:hover {
        filter: brightness(0.6);
      }
    }
    .provider {
      img {
        width: 50px;
        border-radius: 5px;
        filter: brightness(0.5);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        margin-right: 1rem;

        &:hover {
          filter: brightness(1);
        }
      }
    }
  }

  .similar {
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
`;
