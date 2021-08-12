/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRouter as nextRouter } from "next/router";
import { FormEvent, useState } from "react";
import {
  MdClose,
  MdHome,
  MdList,
  MdLocalMovies,
  MdSearch,
  MdTv,
} from "react-icons/md";

import googleIcon from "../../assets/google-icon.svg";
import { useAuth } from "../../hooks/useAuth";
import { Sidebar as SidebarStyles } from "./styles";

interface ISidebarProps {
  setIsOpen: (arg0: boolean) => void;
  isOpen: boolean;
}

export function Sidebar({ setIsOpen, isOpen }: ISidebarProps) {
  const { user, signInWithGoogle } = useAuth();
  const [query, updateQuery] = useState("");

  const { asPath } = useRouter();
  const router = nextRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (query.trim() === "") return;

    router.push(`/search/${query}`);
  }

  return (
    <SidebarStyles>
      <div className="menu">
        {user && (
          <div className="user">
            <img src={user?.avatar} alt={`${user?.name} Image`} />
            <h2>{user?.name}</h2>
          </div>
        )}
        <button onClick={() => setIsOpen(false)} className="close">
          <MdClose size={40} />
        </button>

        <nav>
          <form onSubmit={handleSubmit} className="search">
            <MdSearch size={20} />
            <input
              type="text"
              placeholder="Procure por algo!"
              onChange={(event) => updateQuery(event.target.value)}
            />
          </form>
          <Link href="/">
            <a className={asPath === "/" ? "active" : ""}>
              <MdHome size={20} />
              <p>Home</p>
            </a>
          </Link>
          <Link href="/movies">
            <a className={asPath === "/movies" ? "active" : ""}>
              <MdLocalMovies size={20} />
              <p>Filmes</p>
            </a>
          </Link>
          <Link href="/tv">
            <a className={asPath === "/tv" ? "active" : ""}>
              <MdTv size={20} />
              <p>TV</p>
            </a>
          </Link>
          <Link href={`/watchlist/${user?.id}`}>
            <a className={asPath === `/watchlist/${user?.id}` ? "active" : ""}>
              <MdList size={20} />
              <p>Watchlist</p>
            </a>
          </Link>
        </nav>
        {!user && (
          <button className="google-login" onClick={() => signInWithGoogle()}>
            <Image src={googleIcon} alt="Google" />
            Login com o Google
          </button>
        )}
      </div>
    </SidebarStyles>
  );
}
