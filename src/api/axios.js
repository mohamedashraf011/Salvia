import axios from 'axios';
import { DOMAIN } from '../utils/Domain';

const api = axios.create({
  baseURL: DOMAIN,
});

export default api;
