import * as MaterialDesign from "react-icons/md";
import styled from "styled-components";

import theme from "../../../../styles/theme";

type IButtonProps = {
  isMinimized?: boolean;
};

export const Button = styled.div<IButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: transparent;

  p {
    display: ${({ isMinimized }) => (isMinimized ? "none" : "block")};
  }

  &.is-active {
    &:before {
      transform: translateX(0%);
    }
  }

  &:before {
    content: "";
    width: 3px;
    height: 1.5rem;
    position: absolute;
    left: 0;
    top: 50;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    transform: translateX(-100%);

    background: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    &:before {
      transform: translateX(0%);
    }
  }
`;

export const Title = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
`;
