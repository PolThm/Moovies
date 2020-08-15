import axios from 'axios';

// const key = 'k_eQo8TtS3';
const key = 'k_0D967vw5';
// const key = 'k_7P287LLl';
// const key = 'k_nKk3qG2h';


export default axios.create({
  baseURL: `https://imdb-api.com/en/API/Top250Movies/${key}`,
});
