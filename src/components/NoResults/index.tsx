/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Container } from "./styles";

interface INoResultsProps {
  search: string | string[] | undefined;
}

export function NoResults({ search }: INoResultsProps) {
  return (
    <Container>
      <div>
        <h1>EITA!</h1>
        <p>
          Parece que o{" "}
          <Link href="/movies/299536">
            <a>Thanos</a>
          </Link>{" "}
          estalou os dedos por aqui!
        </p>
        <span>
          Não encontramos resultados para <strong>{`"${search}"`}</strong>.
        </span>
        {/* <ul>
          <li>Experimente buscar por filme, série, ator ou diretor.</li>
          <li>
            Ou voltar para <a href="/">página inicial</a>
          </li>
        </ul> */}
      </div>
      {/* <img src="https://i.ibb.co/h7W9scm/estalo.png" alt="" /> */}
    </Container>
  );
}
