import { ReactNode, useState } from "react";

import { SideBar } from "../../components/Organisms/SideBar";
import * as S from "./styles";

type IBasicTemplateProps = {
  children: ReactNode;
};

export function BasicTemplate({ children }: IBasicTemplateProps) {
  const [sideBarIsMinimized, setSideBarIsMinimized] = useState(false);

  const handleToggleSideBarIsMinimized = () => {
    setSideBarIsMinimized(!sideBarIsMinimized);
  };

  return (
    <S.Container>
      <SideBar
        sideBarIsMinimized={sideBarIsMinimized}
        handleToggleSideBarIsMinimized={handleToggleSideBarIsMinimized}
      />
      <S.Content sideBarIsMinimized={sideBarIsMinimized}>{children}</S.Content>
    </S.Container>
  );
}
