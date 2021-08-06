/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { useWatchlist } from "../../hooks/useWatchlist";
import { database } from "../../services/firebase";
import { Container, Content } from "../../styles/watchlist";

export default function WatchlistComponent() {
  const { user } = useAuth();
  const watchlist = useWatchlist();

  function FormatType(type: string) {
    switch (type) {
      case "movie":
        return "movies";
      case "tv":
        return "tv";
    }
  }

  async function handleWatchedMovie(movieId: string, isWatched: boolean) {
    await database.ref(`watchlists/${user?.id}/watchlist/${movieId}`).update({
      isWatched: !isWatched,
    });
  }

  async function handleDeleteToWatchlist(id: number) {
    const item = watchlist?.filter((item) => item.item_id === id)[0];
    await database.ref(`watchlists/${user?.id}/watchlist/${item?.id}`).remove();
  }

  return (
    <Container>
      <title>Cineapp | Watchlist</title>
      <Content>
        <h1>📄 Minha lista</h1>
        <section>
          {watchlist?.map((item) => {
            return (
              <div key={item.id}>
                <div className="delete">
                  <span></span>
                  <MdDelete
                    size={20}
                    onClick={() => handleDeleteToWatchlist(item.item_id)}
                  />
                </div>
                <Link href={`/${FormatType(item.type)}/${item.item_id}`}>
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt={item.title}
                    />
                  </a>
                </Link>
                <div className="info">
                  <p>{item.title}</p>
                  {item.isWatched ? (
                    <MdCheck
                      className="md-check-circle "
                      size={25}
                      onClick={() =>
                        handleWatchedMovie(item.id, item.isWatched)
                      }
                    />
                  ) : (
                    <MdCheck
                      className="md-check"
                      size={25}
                      onClick={() =>
                        handleWatchedMovie(item.id, item.isWatched)
                      }
                    />
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </Content>
    </Container>
  );
}
