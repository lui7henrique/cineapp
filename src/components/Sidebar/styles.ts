import styled from "styled-components";

export const Sidebar = styled.header`
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--shape);
    padding: 4rem 2rem;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    z-index: 5;

    @media (min-width: 800px) {
      display: none;
    }

    .user {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      border-bottom: 2px solid var(--background);
      padding-bottom: 2rem;
      img {
        border-radius: 50px;
      }
    }

    .google-login {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: #ea4335;
      border: none;
      color: white;
      padding: 1rem 1rem;
      border-radius: 5px;
      font-weight: bold;
      transition: all 0.2s ease-in;
      margin-top: 2rem;
      &:hover {
        filter: brightness(0.8);
      }

      img {
        width: 20px;
      }
    }

    .close {
      position: fixed;
      top: 0;
      right: 10%;
      padding: 1rem;
      border: none;
      background: none;

      svg {
        color: var(--title);
      }
    }

    nav {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        padding: 1rem;

        svg {
          margin: 0 1rem;
        }

        &.active {
          background-color: var(--background);
        }
      }
      .search {
        padding: 1rem;

        svg {
          margin: 0 1rem;
        }
      }
    }
  }
`;
