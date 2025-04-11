// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3500', // Your backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});
