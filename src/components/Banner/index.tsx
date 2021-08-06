/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  MdAdd,
  MdAttachMoney,
  MdDelete,
  MdMoneyOff,
  MdPlayArrow,
  MdRemoveCircle,
} from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { usePlayer } from "../../hooks/usePlayer";
import { useWatchlist } from "../../hooks/useWatchlist";
import { database } from "../../services/firebase";
import { VideosType } from "../../types/videos";
import { Watchlist } from "../../types/watchlist/watchlist";
import { FormatNote } from "../../utils/FormatNote";
import { FormatValue } from "../../utils/FormatValue";
import { VideoPlayer } from "../VideoPlayer";
import { Highlight } from "./styles";

type WatchListItem = {
  id: number;
  poster_path: string;
  title: string;
  type: string;
};

interface IBannerProps {
  backdrop_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  id: number;
  budget?: number;
  revenue?: number;
  videos?: VideosType;
  seasons?: number;
  episodes?: number;
  tagline?: string;
  poster_path: string;
  type: string;
}

export function Banner({
  backdrop_path,
  title,
  budget,
  revenue,
  vote_average,
  vote_count,
  videos,
  seasons,
  episodes,
  tagline,
  id,
  poster_path,
  type,
}: IBannerProps) {
  const { showPlayer, hidePlayer, openPlayer } = usePlayer();
  const { user, signInWithGoogle } = useAuth();
  const watchlist = useWatchlist();

  const hasItem = watchlist?.some((item) => item.item_id === id);
  console.log(hasItem);

  const note = FormatNote(vote_average);
  const noteArray = [];

  for (var i = 0; i < note; i++) {
    noteArray.push(i);
  }

  async function handleAddToWatchlist({
    id,
    poster_path,
    title,
    type,
  }: WatchListItem) {
    if (!user) {
      await signInWithGoogle();
    }

    const movie = {
      id,
      poster_path,
      backdrop_path,
      title,
      type,
      isWatched: false,
    };

    await database.ref(`watchlists/${user?.id}/watchlist`).push(movie);
  }

  async function handleDeleteToWatchlist(id: number) {
    const item = watchlist?.filter((item) => item.item_id === id)[0];
    await database.ref(`watchlists/${user?.id}/watchlist/${item?.id}`).remove();
  }

  return (
    <Highlight backdrop_path={backdrop_path}>
      {showPlayer && (
        <VideoPlayer
          url={`https://www.youtube.com/watch?v=${videos?.results[0].key}`}
        />
      )}
      <div className="infos">
        <h1>{title}</h1>
        {tagline && <p className="tagline">{tagline}</p>}
        <div>
          <div className="note">
            {noteArray.map((note, index) => {
              return <FaStar className="completed" size={20} key={index} />;
            })}
            <p>({vote_count} votos)</p>
            {seasons && (
              <p>
                {" "}
                • {seasons} {seasons > 1 ? "Temporadas" : "Temporada"}
              </p>
            )}
            {episodes && <p> • {episodes} Episódios</p>}
          </div>
        </div>
        <div className="finance">
          <div>
            <p>
              <MdMoneyOff size={25} color="#FF3333" />
              {!budget ? "?" : budget === 0 ? "?" : FormatValue(budget)}
            </p>
          </div>

          <div>
            <p>
              <MdAttachMoney size={25} color="#52DB8B" />
              {!revenue ? "?" : revenue === 0 ? "?" : FormatValue(revenue)}
            </p>
          </div>
        </div>

        <div>
          {videos?.results[0] && (
            <button className="trailer" onClick={openPlayer}>
              <MdPlayArrow size={25} />
              Trailer
            </button>
          )}
          {!hasItem ? (
            <button
              className="watchlist"
              onClick={() =>
                handleAddToWatchlist({ id, poster_path, title, type })
              }
            >
              <MdAdd size={30} />
              <p>Adicionar à watchlist</p>
            </button>
          ) : (
            <button
              className="watchlist delete"
              onClick={() => handleDeleteToWatchlist(id)}
            >
              <MdDelete size={30} />
              <p>Remover da Watchlist</p>
            </button>
          )}
        </div>
      </div>
    </Highlight>
  );
}
