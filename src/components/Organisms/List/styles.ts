import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ListTitle = styled.h4`
  color: ${(props) => props.theme.colors.title};
  line-height: 1.4;
  letter-spacing: 1px;
  filter: brightness(0.5);
  display: block;
`;

export const ItemsList = styled.div`
  display: flex;
  gap: 0.5rem;
`;
