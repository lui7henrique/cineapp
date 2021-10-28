import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import * as S from "./styles";

type IconButtonProps = {
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  title: string;
  path?: string;
};

export function IconButton({ icon, title, path }: IconButtonProps) {
  const { asPath } = useRouter();

  const isActive = path === asPath;

  return path ? (
    <Link href={path}>
      <a>
        <S.Button isActive={isActive} className={isActive ? "is-active" : ""}>
          {icon}
          <S.Title>{title}</S.Title>
        </S.Button>
      </a>
    </Link>
  ) : (
    <S.Button isActive={isActive}>
      {icon}
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
