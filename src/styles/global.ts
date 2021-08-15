import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #141620;
    --shape: #090B10;
    --gradient: linear-gradient(90deg, rgba(0,53,157,1) 5%, rgba(0,111,255,1) 50%, rgba(63,204,255,1) 100%);
    --primary: rgba(0,53,157,1);
    --secondary: #D6AE2F;
    --border: #212b54;
    --hover: #212b54;
    --title: #BFC4D3;
    --subtitle: #9e9e9e;
    --subtext: rgb(88, 88, 88);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {  
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    background-color: var(--background);
    color: var(--title);
    overflow-x: hidden;
    a {
      text-decoration: none;
      color: white;
    }
  }

  button {
    cursor: pointer;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: var(--shape);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 20px;
    border: 3px solid var(--primary);
  }
`;
