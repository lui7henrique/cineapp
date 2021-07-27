/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
import Link from "next/link";
import { MdLocalMovies, MdHome, MdTv } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { useRouter } from "next/dist/client/router";

export function Sidebar() {
  const { asPath } = useRouter();
  return (
    <Container>
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/70612836?s=400&u=6ee8c1a096f3d19c0b6c82de86fe086bac59ee0f&v=4"
          alt="Avatar"
        />
        <div>
          <h3>Luiz Henrique</h3>
          <span>São Paulo, Brasil</span>
          <div className="progress">
            <span className="progress-bar"></span>
          </div>
        </div>
      </div>

      <nav className="navigation">
        <Link href="/">
          <a>
            <div className={asPath === "/" ? "active" : ""}>
              <p>
                <MdHome size={30} />
                Home
              </p>
            </div>
          </a>
        </Link>

        <Link href="/movies">
          <a>
            <div className={asPath === "/movies" ? "active" : ""}>
              <p>
                <MdLocalMovies size={30} />
                Filmes
              </p>
            </div>
          </a>
        </Link>

        <Link href="/tv">
          <a>
            <div className={asPath === "/tv" ? "active" : ""}>
              <p>
                <MdTv size={30} />
                TV
              </p>
            </div>
          </a>
        </Link>

        <Link href="/watchlist">
          <a>
            <div className={asPath === "/watchlist" ? "active" : ""}>
              <p>
                <BiCameraMovie size={30} />
                Watchlist
              </p>
            </div>
          </a>
        </Link>
      </nav>
    </Container>
  );
}
