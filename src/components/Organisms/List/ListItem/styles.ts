import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  &:hover {
    figure {
      filter: brightness(0.7);
      box-shadow: rgba(0, 0, 0, 0.8) 0px 6px 14px 0px,
        rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
    }

    button {
      opacity: 1;
    }
  }
`;

export const PosterWrapper = styled.figure`
  width: 185px;
  height: 280px;
  border-radius: 5px;
  filter: brightness(0.4);
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 14px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  position: relative;
  overflow: hidden;

  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Poster = styled(Image)`
  object-fit: cover;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;
  filter: brightness(0.9);
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
