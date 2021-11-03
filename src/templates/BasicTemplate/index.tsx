import { ReactNode, useState } from "react";

import { SideBar } from "../../components/Organisms/SideBar";
import { useSidebar, SidebarProvider } from "../../hooks/useSidebar";
import * as S from "./styles";

type IBasicTemplateProps = {
  children: ReactNode;
};

export function BasicTemplate({ children }: IBasicTemplateProps) {
  const { sideBarIsMinimized } = useSidebar();

  return (
    <SidebarProvider>
      <S.Container>
        <SideBar />
        <S.Content sideBarIsMinimized={sideBarIsMinimized}>
          {children}
        </S.Content>
      </S.Container>
    </SidebarProvider>
  );
}
