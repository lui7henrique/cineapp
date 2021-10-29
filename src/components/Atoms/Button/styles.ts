import styled from "styled-components";

import theme from "../../../styles/theme";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.title};
  border-radius: ${({ theme }) => theme.sizes.borders.medium};
  font-weight: bold;

  &:hover {
    filter: brightness(0.7);
  }
`;
