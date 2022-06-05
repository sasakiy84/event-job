import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 1000,
});

export default function useApiClient() {
  return {
    apiClient,
  };
}
