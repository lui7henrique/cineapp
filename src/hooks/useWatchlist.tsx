import { useState, useEffect } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type Watchlist = {
  author: {
    name: string;
    id: number;
  };
  list: [
    {
      id: number;
      title: string;
      backdrop_path: string;
      poster_path: string;
      type: "movie" | "tv";
      isWatched: boolean;
    }
  ];
};

export function useWatchlist(authorId: string) {}
