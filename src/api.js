import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const fetchPostById = (id) => axios.get(`${API_URL}/posts/${id}`);
export const createPost = (post) => axios.post(`${API_URL}/posts`, post);
export const updatePost = (id, post) => axios.put(`${API_URL}/posts/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);
