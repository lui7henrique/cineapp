import { FaStar } from "react-icons/fa";
import { MdAdd, MdAttachMoney, MdMoneyOff, MdPlayArrow } from "react-icons/md";
import { usePlayer } from "../../hooks/usePlayer";
import { VideosType } from "../../types/videos";
import { FormatNote } from "../../utils/FormatNote";
import { FormatValue } from "../../utils/FormatValue";
import { VideoPlayer } from "../VideoPlayer";
import { Highlight } from "./styles";

interface IBannerProps {
  backdrop_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget?: number;
  revenue?: number;
  videos?: VideosType;
  seasons?: number;
  episodes?: number;
  tagline?: string;
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
}: IBannerProps) {
  const { showPlayer, hidePlayer, openPlayer } = usePlayer();
  const note = FormatNote(vote_average);
  const noteArray = [];

  for (var i = 0; i < note; i++) {
    noteArray.push(i);
  }

  return (
    <Highlight backdrop_path={backdrop_path}>
      {showPlayer && (
        <VideoPlayer
          url={`https://www.youtube.com/watch?v=${videos?.results[0].key}`}
        />
      )}
      <div>
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

        {budget && (
          <div className="finance">
            <div>
              <p>
                <MdMoneyOff size={25} color="#FF3333" />
                {FormatValue(budget) === "$0.00" ? "?" : FormatValue(budget)}
              </p>
            </div>
            <div>
              <p>
                <MdAttachMoney size={25} color="#52DB8B" />
                {FormatValue(revenue) === "$0.00" ? "?" : FormatValue(revenue)}
              </p>
            </div>
          </div>
        )}

        <div>
          {videos?.results[0] && (
            <button className="trailer" onClick={openPlayer}>
              <MdPlayArrow size={25} />
              Trailer
            </button>
          )}
          <button className="watchlist">
            <MdAdd size={25} />
          </button>
        </div>
      </div>
    </Highlight>
  );
}
