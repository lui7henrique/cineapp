import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ListTitle = styled.h4`
  color: ${(props) => props.theme.colors.title};
  line-height: 1.4;
  letter-spacing: 1px;
  filter: brightness(0.5);
  display: block;
  padding: 0 1rem;
`;

export const ItemsList = styled.div<{ axisX: number }>`
  display: flex;
  gap: 0.5rem;

  padding: 1rem;
  overflow-y: hidden;
  overflow-x: auto;
  margin-left: -${({ axisX }) => axisX}px;
  transition: all 0.5s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListControllerLeft = styled.div`
  position: absolute;
  left: 0;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  z-index: 25;

  svg {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const ListControllerRight = styled.div`
  position: absolute;
  right: 0;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    transform: rotate(-90deg);
  }
`;
