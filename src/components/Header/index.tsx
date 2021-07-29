/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Header as HeaderStyles } from "./styles";
import {
  MdClose,
  MdHome,
  MdList,
  MdLocalMovies,
  MdMenu,
  MdTv,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  return (
    <HeaderStyles>
      <button onClick={() => setIsOpen(!isOpen)}>
        <MdMenu size={40} />
      </button>

      {isOpen && (
        <div className="menu">
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={40} />
          </button>

          <nav>
            <Link href="/">
              <a href="">
                <MdHome />
                <p>Home</p>
              </a>
            </Link>
            <Link href="/movies">
              <a href="">
                <MdLocalMovies />
                <p>Filmes</p>
              </a>
            </Link>
            <Link href="/tv">
              <a href="">
                <MdTv />
                <p>TV</p>
              </a>
            </Link>
            <Link href="/watchlist">
              <a href="">
                <MdList />
                <p>Watchlist</p>
              </a>
            </Link>
          </nav>
        </div>
      )}
      <div className="nav">
        <nav>
          <Link href="/">
            <a href="">
              <MdHome />
              <p>Home</p>
            </a>
          </Link>
          <Link href="/movies">
            <a href="">
              <MdLocalMovies />
              <p>Filmes</p>
            </a>
          </Link>
          <Link href="/tv">
            <a href="">
              <MdTv />
              <p>TV</p>
            </a>
          </Link>
          <Link href="/watchlist">
            <a href="">
              <MdList />
              <p>Watchlist</p>
            </a>
          </Link>
        </nav>
      </div>
      <div className="profile">
        <div>
          <p>Luiz Henrique</p>
          <div className="progress">
            <span className="progress-bar"></span>
          </div>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/368474985678897152/869387534285803530/unknown.png"
          alt="Diego"
        />
      </div>
    </HeaderStyles>
  );
}
