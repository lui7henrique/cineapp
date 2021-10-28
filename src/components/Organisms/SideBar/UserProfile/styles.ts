import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageWrapper = styled.figure`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.sizes.borders.full};

  img {
    object-fit: cover;
    object-position: center;
    user-select: none;
    -webkit-user-drag: none;
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
  }
`;

export const UserInformations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h4``;

export const Status = styled.p`
  filter: brightness(0.5);
`;
