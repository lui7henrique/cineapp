import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 10rem;
      background-image: url("https://i.ibb.co/XbtHCsC/bluegalaxy.jpg");
      background-size: cover;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    a {
      transition: all 0.2s ease-in-out;
      &:hover {
        color: #047fc1;
      }
    }
  }
`;
