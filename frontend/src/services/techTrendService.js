import api from './api';

class TechTrendService {

  async getAllTrends() {
    try {
      const response = await api.get('/trends');
      return response.data;
    } catch (error) {
      console.error('Error fetching tech trends:', error);
      throw error;
    }
  }

  async getTrendsByCategory(category) {
    try {
      const response = await api.get(`/trends/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching trends for ${category}:`, error);
      throw error;
    }
  }
}

export default new TechTrendService();