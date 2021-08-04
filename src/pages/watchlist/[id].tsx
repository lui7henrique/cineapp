import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { Container, Content } from "../../styles/home";

export default function Tv() {
  const { query } = useRouter();
  const { user } = useAuth();

  return (
    <Container>
      <title>Cineapp | Watchlist</title>
      <Content>
        <h1>📄 Watchlist</h1>
        {user && <p>{user.name}</p>}
      </Content>
    </Container>
  );
}
