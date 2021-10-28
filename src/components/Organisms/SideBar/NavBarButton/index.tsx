import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import * as S from "./styles";

type IconButtonProps = {
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  title: string;
  path?: string;
  isMinimized?: boolean;
};

export function IconButton({
  icon,
  title,
  path,
  isMinimized,
}: IconButtonProps) {
  const { asPath } = useRouter();

  const isActive = path === asPath;

  return path ? (
    <Link href={path}>
      <a>
        <S.Button
          className={isActive ? "is-active" : ""}
          isMinimized={isMinimized}
        >
          {icon}
          <S.Title>{title}</S.Title>
        </S.Button>
      </a>
    </Link>
  ) : (
    <S.Button isMinimized={isMinimized}>
      {icon}
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
