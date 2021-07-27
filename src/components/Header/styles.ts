import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 45px;

  div {
    display: flex;
    background: var(--shape);
    border-radius: 5px;
    align-items: center;
    padding: 0 1rem;

    input {
      border: none;
      outline: none;
      color: var(--title);
      background: none;
    }

    svg {
      margin-right: 1rem;
    }
  }

  select {
    background: var(--shape);
    border: none;
    outline: none;
    margin-right: 1rem;
    color: var(--title);
    padding: 0 1rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;

    option {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`;
