/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useRouter as nextRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import {
  MdHome,
  MdList,
  MdLocalMovies,
  MdMenu,
  MdSearch,
  MdTv,
} from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { Sidebar } from "../Sidebar";
import { Header as HeaderStyles } from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithGoogle } = useAuth();
  const [query, updateQuery] = useState("");

  const { asPath } = useRouter();
  const router = nextRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (query.trim() === "") return;

    router.push(`/search/${query}`);
  }

  return (
    <HeaderStyles>
      <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
        <MdMenu size={40} />
      </button>

      {isOpen && <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />}
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
          {user && (
            <Link href={`/watchlist/${user.id}`}>
              <a href="">
                <MdList />
                <p>Watchlist</p>
              </a>
            </Link>
          )}
        </nav>
        <form onSubmit={handleSubmit} className="search">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </form>
      </div>
      {!user ? (
        <button className="login" onClick={() => signInWithGoogle()}>
          <img src="/google-icon.svg" alt="Google" />
          Login com o Google
        </button>
      ) : (
        <div className="profile">
          <div>
            <p>{user.name}</p>
          </div>
          <img src={user.avatar} alt={user.name} />
        </div>
      )}
    </HeaderStyles>
  );
}
