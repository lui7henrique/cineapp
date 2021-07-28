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

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;

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
`;
