// src/services/userService.js
import api from './axios';

export const getUsers = () => {
  return api.get('/list');
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
