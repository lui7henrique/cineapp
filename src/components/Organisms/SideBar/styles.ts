import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.colors.shape};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  padding: 1rem;
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
