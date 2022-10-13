import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/challange-c0e2b/us-central1/api", //The API (cloud function)URL
});

export default instance;
// http://localhost:5001/challange-c0e2b/us-central1/api
