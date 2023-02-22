import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:4000"});

export const getTimeLinePosts =(id) => API.get(`post/timeline/${id}`);
export const likedPost = (id, userId) => API.put(`post/like/${id}`, {userId})