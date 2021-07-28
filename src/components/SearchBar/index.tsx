import { Container } from "./styles";
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { FormatGenre } from "../../utils/FormatGenre";
import { FormatGenreName } from "../../utils/FormatGenreName";
import { Genre } from "../../types/genre";

export function SearchBar() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { asPath } = useRouter();

  useEffect(() => {
    async function getGenres() {
      const genres = await fetch(
        `https://api.themoviedb.org/3/genre/${FormatGenre(
          asPath
        )}/list?api_key=90f2b425e5ff1b801ed9dccf4bafadde`
      ).then((res) => res.json());
      setGenres(genres.genres);
    }
    getGenres();
  }, [asPath]);

  return (
    <Container>
      {asPath !== "/" && (
        <select name="genres">
          <option value="all">Todos</option>
          {genres.map((genre) => {
            return (
              <option value={genre.name} key={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
      )}

      <div>
        <MdSearch />
        <input type="text" placeholder="Procure pelo seu interesse" />
      </div>
    </Container>
  );
}
