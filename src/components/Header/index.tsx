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
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithGoogle } = useAuth();

  const { asPath } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  return (
    <HeaderStyles>
      <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
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
      {!user ? (
        <button className="login" onClick={() => signInWithGoogle()}>
          <img src="google.svg" alt="Google" />
          Login com o Google
        </button>
      ) : (
        <div className="profile">
          <div>
            <p>{user.name}</p>
            {/* <div className="progress">
              <span className="progress-bar"></span>
            </div> */}
          </div>
          <img src={user.avatar} alt={user.name} />
        </div>
      )}
    </HeaderStyles>
  );
}
