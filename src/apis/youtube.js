/**
 * @author Filip.Kusztelak
 */
import axios from "axios";

const KEY = "AIzaSyBLugoiskba2Cf1QX4g1aFflbiwnvZLYu4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
