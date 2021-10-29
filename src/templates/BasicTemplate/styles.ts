import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div<{ sideBarIsMinimized: boolean }>`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
