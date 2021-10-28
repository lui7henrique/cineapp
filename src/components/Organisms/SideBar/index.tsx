import { useState } from "react";
import * as BoxIcons from "react-icons/bi";
import * as Heroicons from "react-icons/hi";
import * as MaterialDesign from "react-icons/md";

import { IconButton } from "./NavBarButton";
import * as S from "./styles";
import { UserProfile } from "./UserProfile";

interface ISideBarProps {
  sideBarIsMinimized: boolean;
  handleToggleSideBarIsMinimized: () => void;
}

export function SideBar({
  sideBarIsMinimized,
  handleToggleSideBarIsMinimized,
}: ISideBarProps) {
  return (
    <S.Container isMinimized={sideBarIsMinimized}>
      <S.MinimizeIcon onClick={handleToggleSideBarIsMinimized}>
        {!sideBarIsMinimized && (
          <S.Icon>
            <Heroicons.HiLogin size={20} />
          </S.Icon>
        )}
      </S.MinimizeIcon>

      <S.Header isMinimized={sideBarIsMinimized}>
        {!sideBarIsMinimized ? (
          <UserProfile isMinimized={sideBarIsMinimized} />
        ) : (
          <S.Icon>
            <MaterialDesign.MdMenu
              size={20}
              onClick={handleToggleSideBarIsMinimized}
            />
          </S.Icon>
        )}
      </S.Header>

      <S.Content>
        <S.Nav>
          <IconButton
            title="Home"
            icon={<MaterialDesign.MdHome size={20} />}
            path="/"
            isMinimized={sideBarIsMinimized}
          />

          <IconButton
            title="Filmes"
            icon={<MaterialDesign.MdMovie size={20} />}
            path="/movies"
            isMinimized={sideBarIsMinimized}
          />

          <IconButton
            title="Séries"
            icon={<MaterialDesign.MdTv size={20} />}
            path="/tv"
            isMinimized={sideBarIsMinimized}
          />
          <IconButton
            title="Atores"
            icon={<MaterialDesign.MdPeople size={20} />}
            path="/actors"
            isMinimized={sideBarIsMinimized}
          />
          <IconButton
            title="Watchlist"
            icon={<MaterialDesign.MdList size={20} />}
            path="/watchlist"
            isMinimized={sideBarIsMinimized}
          />
        </S.Nav>
        <IconButton
          title="Log out"
          icon={<BoxIcons.BiLogOut size={20} />}
          isMinimized={sideBarIsMinimized}
        />
      </S.Content>
    </S.Container>
  );
}
