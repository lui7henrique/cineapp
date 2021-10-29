import styled from "styled-components";

type IContainerBannerProps = {
  backdrop_path: string;
};

export const Container = styled.div<IContainerBannerProps>`
  width: 110%;
  height: 70vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.93) 40%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    ${(props) =>
      `url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-position: 50%;
    padding: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-position: 50%;
    max-width: 300px;
  }
`;

export const Title = styled.h1``;

export const Overview = styled.p`
  line-height: 1.5;
  text-align: justify;
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Rating = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const RatingValue = styled.sub`
  opacity: 0.5;
`;
