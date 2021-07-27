import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100vw;

  > div {
    margin-right: 2rem;
    display: flex;
    width: 40vw;
    flex-direction: column;
    img {
      border-radius: 10px;
      filter: brightness(0.8);
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1);
      }
    }

    div {
      display: flex;
    }
  }
`;
