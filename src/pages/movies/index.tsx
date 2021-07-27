import { Header } from "../../components/Header";
import { Container, Content } from "../../styles/home";

export default function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <h1>Filmes</h1>
      </Content>
    </Container>
  );
}
