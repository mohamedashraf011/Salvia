import api from './axios';

export const fetchRnDPage = async () => {
  try {
    const response = await api.get('/api/rnd/page');
    return response.data;
  } catch (error) {
    console.error('Error fetching R&D page data:', error);
    throw error;
  }
};

export const fetchRnDSections = async () => {
  try {
    const response = await api.get('/api/rnd/sections');
    return response.data;
  } catch (error) {
    console.error('Error fetching R&D sections:', error);
    throw error;
  }
};
