import styled from "styled-components";

interface IContentProps {
  axisX: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 0 0 1rem 5rem;

    @media (max-width: 500px) {
      padding: 1rem;
    }
  }
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 5rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
  }
  margin-left: ${(props) => props.axisX}px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    .list_controller {
      opacity: 1;
    }
  }

  .list_controller {
    position: absolute;
    padding: 0.2rem;

    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    border-radius: 50%;

    svg {
      color: var(--title);
    }
  }

  @media (max-width: 1120px) {
    padding-right: 0;
    overflow-x: auto;
    margin: 0;
    padding-right: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .list_controller {
      display: none;
    }
  }

  .participant {
    background: var(--shape);
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      img {
        filter: brightness(1);
      }
    }

    img {
      width: 170px;
      border-radius: 5px 5px 0 0;
      filter: brightness(0.7);
      transition: all 0.2s ease-in-out;
    }

    div {
      padding: 0 0.5rem;
      width: 100%;
      height: 50px;

      .name {
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .character {
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.8rem;
        opacity: 0.5;
      }
    }
  }
`;

export const ListControllerLeft = styled.div`
  left: 0;

  &.disabled {
    display: none;
  }
`;

export const ListControllerRight = styled.div`
  right: 0;

  &.disabled {
    display: none;
  }
`;
