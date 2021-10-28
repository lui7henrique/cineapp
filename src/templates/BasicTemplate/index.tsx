import { ReactNode } from "react";

import { Sidebar } from "../../components/Organisms/SideBar";
import * as S from "./styles";

type IBasicTemplateProps = {
  children: ReactNode;
};

export function BasicTemplate({ children }: IBasicTemplateProps) {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
