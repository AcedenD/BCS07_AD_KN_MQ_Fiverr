import axios from "axios";
import { layDuLieuLocal } from "../utils/localStore";

// interceptors
const BASE_URL = "https://fiverrnew.cybersoft.edu.vn";

const tokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMjcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoyNzAzMDkxNjAwfQ.WhiaWv7nPOi0RVoZB4Yckidm1CYBy-8xeDVf55p4DGw";

// for testing
// const tokenAuthorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2NTIiLCJlbWFpbCI6InRlc3RlcjFAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwibmJmIjoxNjkwNjM5MzcxLCJleHAiOjE2OTEyNDQxNzF9.YbZiTWHYODpwkiOErI315HMVUAZoDd-2FVffPud-kRY";
// real code below
const tokenAuthorization = layDuLieuLocal("token");

// console.log(tokenAuthorization);

const configHeaderAxios = () => {
  // console.log(tokenAuthorization);
  return {
    tokenCybersoft,
    token: tokenAuthorization,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaderAxios(),
});
