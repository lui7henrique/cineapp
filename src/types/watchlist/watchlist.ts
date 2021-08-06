export type UnformattedWatchlist = Record<
  string,
  {
    backdrop_path: string;
    id: number;
    isWatched: string;
    poster_path: string;
    title: string;
    type: string;
  }
>;

export type Watchlist = {
  id: string;
  backdrop_path: string;
  isWatched: boolean;
  poster_path: string;
  title: string;
  type: string;
  item_id: number;
};
