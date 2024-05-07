//import axios
import axios from "axios";

const api = axios.create({
  //set default endpoint API
  // baseURL: `${import.meta.env.PUBLIC_BASE_URL}`,
  baseURL:"http://localhost:8000",
  // baseURL:import.meta.env.PUBLIC_BASE_URL
});

export default api;