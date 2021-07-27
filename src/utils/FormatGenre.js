export function FormatGenre(asPath) {
  switch (asPath) {
    case "/movies":
      return "movie";
    case "/tv":
      return "tv";
    default:
      return asPath;
  }
}
