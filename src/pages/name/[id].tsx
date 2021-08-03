import { useRouter } from "next/dist/client/router";

export default function Name() {
  const { query } = useRouter();
  const { id } = query;
  return <h1>{id}</h1>;
}
