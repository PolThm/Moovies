import axios from 'axios';

export default axios.create({
  baseURL: 'https://bridge.buddyweb.fr/api/marmiton/entrees',
});
