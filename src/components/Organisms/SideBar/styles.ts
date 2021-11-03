import * as MaterialDesign from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div<{ isMinimized: boolean }>`
  width: ${({ isMinimized }) => (isMinimized ? "50px" : "300px")};
  height: 100vh;
  background: ${(props) => props.theme.colors.shape};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  transition: width 0.2s ease-in-out;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Icon = styled.div`
  svg {
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const MinimizeIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`;

export const Header = styled.div<{ isMinimized: boolean }>`
  padding: 1.5rem 0.9rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavItem = styled.a``;
