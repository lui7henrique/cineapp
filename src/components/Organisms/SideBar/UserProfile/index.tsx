import Image from "next/image";

import * as S from "./styles";

type IUserProfileProps = {
  isMinimized: boolean;
};

export function UserProfile({ isMinimized }: IUserProfileProps) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image
          src="http://github.com/lui7henrique.png"
          width="50"
          height="50"
          alt="Henrique"
        />
      </S.ImageWrapper>

      {!isMinimized && (
        <S.UserInformations>
          <S.Name>Luiz Henrique</S.Name>
          <S.Status>Online</S.Status>
        </S.UserInformations>
      )}
    </S.Container>
  );
}
