import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div<{ sideBarIsMinimized: boolean }>`
  width: ${({ sideBarIsMinimized }) =>
    sideBarIsMinimized ? "calc(100vw - 50px)" : "calc(100vw - 250px)"};
  height: 100vh;
  overflow: auto;
`;
