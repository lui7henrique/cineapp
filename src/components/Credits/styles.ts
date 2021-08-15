import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .expand {
    display: flex;
    align-items: center;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 50%;
    transition: all 0.3s ease-in;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
    }

    svg {
      cursor: pointer;
      transition: all 0.3s ease-in;
      background: var(--shape);
      border-radius: 50%;

      &:hover {
        filter: brightness(0.8);
      }

      &.less {
        transform: rotate(180deg);
      }
    }
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 1rem;

  div {
    width: 100%;

    &:hover {
      img {
        box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
        filter: brightness(0.4);
      }
    }

    img {
      width: 100%;
      border-radius: 5px;
      filter: brightness(0.2);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      transition: all 0.3s ease-in;
    }

    .infos {
      filter: brightness(1);
      padding: 0 1rem;
      padding-bottom: 0.5rem;
      margin-top: -55px;
      z-index: 2;

      .title {
        font-weight: bold;
        max-width: 200px;
        @media (max-width: 600px) {
          max-width: 110px;
        }
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .character {
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        @media (max-width: 600px) {
          max-width: 110px;
        }
      }
    }
  }
`;
