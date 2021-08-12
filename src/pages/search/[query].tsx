/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { NoResults } from "../../components/NoResults";
import { api } from "../../services/api";
import { Container, Content } from "../../styles/search";

type SimpleQuery = {
  id: number;
  poster: string;
  title: string;
};

interface PeopleQuery extends Omit<SimpleQuery, "title" | "poster"> {
  name: string;
  profile: string;
}

interface ISearchProps {
  movies?: SimpleQuery[] | undefined;
  tv?: SimpleQuery[] | undefined;
  people: PeopleQuery[] | undefined;
}

export default function Search({ movies, tv, people }: ISearchProps) {
  const { query } = useRouter();
  const search = query.query;
  const noResults =
    movies?.length === 0 && tv?.length === 0 && people?.length === 0;

  return (
    <>
      <title>{search}</title>
      <Container>
        <Content>
          {noResults ? (
            <NoResults search={search} />
          ) : (
            <>
              {movies && movies.length > 1 && (
                <section className="movies">
                  <h2>Filmes</h2>
                  <div>
                    {movies?.map((movie) => {
                      return (
                        movie.poster && (
                          <Link href={`/movies/${movie.id}`} key={movie.id}>
                            <a>
                              <div key={movie.id} className="movie">
                                <img
                                  src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                                  alt=""
                                />
                                <p>{movie.title}</p>
                              </div>
                            </a>
                          </Link>
                        )
                      );
                    })}
                  </div>
                </section>
              )}
              {tv && tv.length > 1 && (
                <section className="tv">
                  <h2>TV</h2>
                  <div>
                    {tv?.map((item) => {
                      return (
                        <Link href={`/tv/${item.id}`} key={item.id}>
                          <a>
                            <div>
                              {item.poster ? (
                                <img
                                  src={`https://image.tmdb.org/t/p/w500/${item.poster}`}
                                  alt={item.title}
                                />
                              ) : (
                                <img
                                  src="https://i.ibb.co/k6QMQ8T/Screenshot-7.jpg"
                                  alt="Empty image"
                                />
                              )}
                              <p>{item.title}</p>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
              {people && people.length > 1 && (
                <section className="movies">
                  <h2>Pessoas</h2>
                  <div>
                    {people?.map((personal) => {
                      return (
                        <Link href={`/person/${personal.id}`} key={personal.id}>
                          <a>
                            <div>
                              {personal.profile ? (
                                <img
                                  src={`https://image.tmdb.org/t/p/w500/${personal.profile}`}
                                  alt=""
                                />
                              ) : (
                                <img
                                  src="https://i.ibb.co/k6QMQ8T/Screenshot-7.jpg"
                                  alt="Empty image"
                                />
                              )}

                              <p>{personal.name}</p>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </>
          )}
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.query;

  const response = await api.get("/search/multi", {
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      query: searchQuery,
      language: "pt-BR",
    },
  });

  const movies: any = [];
  const tv: any = [];
  const people: any = [];

  response.data.results.forEach((item: any) => {
    switch (item.media_type) {
      case "movie":
        movies.push({
          id: String(item.id),
          title: item.title,
          poster: item.poster_path,
        });

        break;
      case "tv":
        tv.push({
          id: String(item.id),
          title: item.name,
          poster: item.poster_path,
        });

        break;
      case "person":
        people.push({
          id: String(item.id),
          name: item.name,
          profile: item.profile_path,
        });

        break;
      default:
        break;
    }
  });

  return {
    props: {
      movies,
      tv,
      people,
    },
  };
};
