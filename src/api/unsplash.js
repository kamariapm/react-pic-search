import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0cc6b7f64d2ed6d67c8cd3641f81188f3a57650a21b2f726300725ab1b2201ee"
  }
});
