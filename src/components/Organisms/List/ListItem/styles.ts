import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  &:hover {
    img {
      filter: brightness(0.3);
      box-shadow: rgba(0, 0, 0, 0.8) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
    }

    button {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 5px;
  filter: brightness(0.8);
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const TrailerButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  padding: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
