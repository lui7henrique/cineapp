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
  z-index: 99999999;
  height: 5rem;

  .hamburger {
    background: none;
    border: none;

    svg {
      color: var(--title);
    }

    @media (min-width: 500px) {
      display: none;
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--shape);

    width: 100vh;
    height: 110vh;

    @media (min-width: 500px) {
      display: none;
    }

    button {
      position: fixed;
      right: 0;
      padding: 1rem;
    }

    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin: 35% 16%;
      a {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 2rem;
        margin-top: 1rem;
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 500px) {
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
    .progress {
      width: 100%;
      height: 6px;
      background: #e1e4e8;
      border-radius: 10px;
      margin-top: 0.5rem;
      .progress-bar {
        display: block;
        height: 100%;
        width: 90%;
        background: var(--gradient);
        background-size: 300% 100%;
        animation: progress-animation 2s linear infinite;
      }
    }
  }

  .login {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--primary);
    border: none;
    color: var(--title);
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.2s ease-in;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
