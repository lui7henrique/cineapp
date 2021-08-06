import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--shape);
  z-index: 5;
  height: 5rem;

  .hamburger {
    background: none;
    border: none;
    display: block;

    svg {
      color: var(--title);
    }

    @media (min-width: 800px) {
      display: none;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 800px) {
      display: none;
    }

    h1 {
      span {
        color: var(--secondary);
      }
    }

    nav {
      display: flex;
      gap: 1.5rem;
      align-items: flex-end;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: bold;

        p {
          transition: border 0.2s ease-in-out;
          padding: 0.2rem 0;

          &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: white;
            transition: width 0.2s;
            border-radius: 5px;
          }

          &:hover::after {
            width: 100%;
            //transition: width .3s;
          }
        }
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    img {
      width: 40px;
      border-radius: 5px;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  .login {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #ea4335;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.2s ease-in;
    &:hover {
      filter: brightness(0.8);
    }
    @media (max-width: 800px) {
      display: none;
    }
  }

  .search {
    display: flex;
    align-items: center;
    background: var(--background);
    padding: 0.5rem 1rem;
    gap: 1rem;
    border-radius: 5px;

    input {
      border: none;
      background: none;
      outline: none;
      color: var(--title);
    }
  }
`;
