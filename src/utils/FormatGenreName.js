export function FormatGenreName(genre_name) {
  switch (genre_name) {
    case "Action":
      return "Ação";
    case "Action & Adventure":
      return "Ação e Aventura";
    case "Adventure":
      return "Aventura";
    case "Animation":
      return "Animação";
    case "Comedy":
      return "Comédia";
    case "Crime":
      return "Crime";
    case "Documentary":
      return "Documentário";
    case "Drama":
      return "Drama";
    case "Family":
      return "Família";
    case "History":
      return "História";
    case "Horror":
      return "Terror";
    case "Kids":
      return "Infantil";
    case "Mystery":
      return "Mistério";
    case "News":
      return "Notícias";
    case "Reality":
      return "Reality Show";
    case "Romance":
      return "Romance";
    case "Science Fiction":
      return "Ficção Científica";
    case "Sci-Fi & Fantasy":
      return "Ficção científica e fantasia";
    case "Soap":
      return "Soap";
    case "Talk":
      return "Talk-show";
    case "TV Movie":
      return "Filme de TV";
    case "Thriller":
      return "Filme de ação";
    case "War":
      return "Guerra";
    case "War & Politics":
      return "Guerra e Política";
    case "Western":
      return "Ocidental";
    default:
      return genre_name;
  }
}
