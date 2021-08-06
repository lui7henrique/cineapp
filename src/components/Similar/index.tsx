/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { Container } from "./styles";

interface ISimilarProps {
  similar: {
    page: number;
    results: [
      {
        backdrop_path: string;
        id: number;
        name?: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
        title?: number;
      }
    ];
  };
  type: "tv" | "movies";
}

export function Similar({ type, similar }: ISimilarProps) {
  const [showSimilar, updateSimilar] = useState(8);
  const router = useRouter();

  useEffect(() => {
    updateSimilar(8);
  }, [router]);

  return (
    <Container>
      <div className="similar">
        <h2>Semelhantes</h2>
        <div>
          {similar.results.slice(0, showSimilar).map((item) => {
            return (
              item.overview && (
                <Link href={`/${type}/${item.id}`} key={item.id}>
                  <a>
                    <div className="similar-item">
                      {item.backdrop_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://i.ibb.co/2dkrb1N/Screenshot-6.jpg"
                          alt=""
                        />
                      )}
                      <div>
                        <h1>{item.title ? item.title : item.name}</h1>
                        <p>{item.overview}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            );
          })}
        </div>
      </div>
      <div className="expand">
        {showSimilar === similar.results.length ? (
          <MdExpandLess size={40} onClick={() => updateSimilar(8)} />
        ) : (
          <MdExpandMore
            size={40}
            onClick={() =>
              updateSimilar(showSimilar + similar.results.length - 8)
            }
          />
        )}
      </div>
    </Container>
  );
}
