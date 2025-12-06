import axios from './axios';

export const fetchAboutPage = async () => {
  try {
    const response = await axios.get('/api/about-us/page');
    return response.data;
  } catch (error) {
    console.error("Error fetching About Us page data:", error);
    throw error;
  }
};

export const fetchAboutSections = async () => {
  try {
    const response = await axios.get('/api/about-us/sections');
    return response.data;
  } catch (error) {
    console.error("Error fetching About Us sections data:", error);
    throw error;
  }
};
