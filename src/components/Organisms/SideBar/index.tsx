import { useState } from "react";
import * as BoxIcons from "react-icons/bi";
import * as Heroicons from "react-icons/hi";
import * as MaterialDesign from "react-icons/md";

import { IconButton } from "./NavBarButton";
import * as S from "./styles";
import { UserProfile } from "./UserProfile";

export function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleIsMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <S.Container isMinimized={isMinimized}>
      <S.MinimizeIcon onClick={handleToggleIsMinimized}>
        {!isMinimized && (
          <S.Icon>
            <Heroicons.HiLogin size={20} />
          </S.Icon>
        )}
      </S.MinimizeIcon>

      <S.Header isMinimized={isMinimized}>
        {!isMinimized ? (
          <UserProfile isMinimized={isMinimized} />
        ) : (
          <S.Icon>
            <MaterialDesign.MdMenu
              size={20}
              onClick={handleToggleIsMinimized}
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
            isMinimized={isMinimized}
          />

          <IconButton
            title="Filmes"
            icon={<MaterialDesign.MdMovie size={20} />}
            path="/movies"
            isMinimized={isMinimized}
          />

          <IconButton
            title="Séries"
            icon={<MaterialDesign.MdTv size={20} />}
            path="/tv"
            isMinimized={isMinimized}
          />
          <IconButton
            title="Atores"
            icon={<MaterialDesign.MdPeople size={20} />}
            path="/actors"
            isMinimized={isMinimized}
          />
          <IconButton
            title="Watchlist"
            icon={<MaterialDesign.MdList size={20} />}
            path="/watchlist"
            isMinimized={isMinimized}
          />
        </S.Nav>
        <IconButton
          title="Log-out"
          icon={<BoxIcons.BiLogOut size={20} />}
          isMinimized={isMinimized}
        />
      </S.Content>
    </S.Container>
  );
}
