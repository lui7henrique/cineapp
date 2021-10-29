import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  color: ${(props) => props.theme.colors.title};
  line-height: 1.4;
  letter-spacing: 1px;
  filter: brightness(0.5);
  display: block;
  padding: 0 1rem;
`;

export const ItemsList = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;

  padding: 1rem;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListControllerLeft = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
`;

export const ListControllerRight = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
`;
