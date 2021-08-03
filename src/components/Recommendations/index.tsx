/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Container } from "./styles";

interface IRecommendationsProps {
  recommendations: {
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

export function Recommendations({
  recommendations,
  type,
}: IRecommendationsProps) {
  const [showRecommendations, updateRecommendations] = useState(8);
  const router = useRouter();

  useEffect(() => {
    updateRecommendations(8);
  }, [router]);

  return (
    <Container>
      <div className="recommendations">
        <h2>Recomendados</h2>
        <div>
          {recommendations.results
            .slice(0, showRecommendations)
            .map((recommendation) => {
              return (
                <Link
                  href={`/${type}/${recommendation.id}`}
                  key={recommendation.id}
                >
                  <a>
                    <div className="recommendation">
                      {recommendation.backdrop_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${recommendation.backdrop_path}`}
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://i.ibb.co/2dkrb1N/Screenshot-6.jpg"
                          alt=""
                        />
                      )}

                      <div>
                        <h1>
                          {recommendation.title
                            ? recommendation.title
                            : recommendation.name}
                        </h1>
                        <p>{recommendation.overview}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="expand">
        {showRecommendations === recommendations.results.length ? (
          <MdExpandLess size={40} onClick={() => updateRecommendations(8)} />
        ) : (
          <MdExpandMore
            size={40}
            onClick={() =>
              updateRecommendations(
                showRecommendations + recommendations.results.length - 8
              )
            }
          />
        )}
      </div>
    </Container>
  );
}
