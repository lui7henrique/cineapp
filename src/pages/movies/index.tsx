import { SearchBar } from "../../components/SearchBar";
import { Container, Content } from "../../styles/home";

export default function Home() {
  return (
    <Container>
      <title>Cineapp | Movies</title>
      <Content>
        <SearchBar />
        <h1>Filmes</h1>
      </Content>
    </Container>
  );
}
