import * as BoxIcons from "react-icons/bi";
import * as MaterialDesign from "react-icons/md";

import { IconButton } from "./NavBarButton";
import * as S from "./styles";

export function Sidebar() {
  return (
    <S.Container>
      <S.Header></S.Header>
      <S.Content>
        <S.Nav>
          <S.NavItem>
            <IconButton
              title="Home"
              icon={<MaterialDesign.MdHome size={20} />}
              path="/"
              variant="secondary"
            />
          </S.NavItem>

          <IconButton
            title="Filmes"
            icon={<MaterialDesign.MdMovie size={20} />}
            path="/movies"
          />

          <IconButton
            title="Séries"
            icon={<MaterialDesign.MdTv size={20} />}
            path="/tv"
          />
          <IconButton
            title="Atores"
            icon={<MaterialDesign.MdPeople size={20} />}
            path="/actors"
          />
          <IconButton
            title="Watchlist"
            icon={<MaterialDesign.MdList size={20} />}
            path="/watchlist"
          />
        </S.Nav>
        <IconButton title="Log-out" icon={<BoxIcons.BiLogOut size={20} />} />
      </S.Content>
    </S.Container>
  );
}
