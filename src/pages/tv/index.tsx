import { SearchBar } from "../../components/SearchBar";
import { Container, Content } from "../../styles/home";

export default function Tv() {
  return (
    <Container>
      <title>Cineapp | TV</title>
      <Content>
        <SearchBar />
        <h1>TV</h1>
      </Content>
    </Container>
  );
}
