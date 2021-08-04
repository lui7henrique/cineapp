import { GetServerSideProps } from "next";
import { CardList } from "../../components/CardList";
import { api } from "../../services/api";
import { Container, Content } from "../../styles/home";

export default function Tv(response: any) {
  return (
    <Container>
      <title>Cineapp | TV</title>
      <Content>
        <h1>TV</h1>
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};
