import axios from 'axios';

const KEY = 'AIzaSyBaGqEEAa69Meuljnl6ggM7YthYa8mZksM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
