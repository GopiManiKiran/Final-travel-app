import axios from 'axios';

const API = axios.create({ baseURL: 'https://final-travel-app.onrender.com/api' });

export const createTrip = (tripData) => API.post('/trips', tripData);
