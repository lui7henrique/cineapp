import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #1b2138;
  height: 100vh;
  z-index: 999;

  .profile {
    display: flex;
    padding-bottom: 1rem;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);

    img {
      width: 75px;
      height: 75px;
      margin-right: 1rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
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
  }

  .navigation {
    list-style: none;

    a {
      div {
        opacity: 2;
        transition: all 0.2s ease-in-out;

        p {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          padding: 1rem 1rem;
          cursor: pointer;

          svg {
            margin-right: 1rem;
          }
        }
        &:hover {
          background: var(--border);
        }
        &.active {
          background: var(--border);
        }
      }
    }
  }
`;
