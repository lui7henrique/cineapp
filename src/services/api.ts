import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3", 
    params: {
      api_key: process.env.NEXT_PUBLIC_IMBD_API_KEY,
      language: "pt-BR",
    },  
});
