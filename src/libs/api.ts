import axios from "axios";

export const api = axios.create({
  baseURL: 'locahost:3333'
});