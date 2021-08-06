import { VideoResponsive } from "./styles";

type YoutubeEmbedType = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: YoutubeEmbedType) {
  return (
    <VideoResponsive>
      <iframe
        width="400"
        height="280"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1"`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoResponsive>
  );
}
