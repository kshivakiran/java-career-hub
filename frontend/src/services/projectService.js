import api from './api';

class ProjectService {

  async getAllProjects() {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }

  async getProjectById(id) {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      throw error;
    }
  }

  async getProjectsByDifficulty(difficulty) {
    try {
      const response = await api.get(`/projects/difficulty/${difficulty}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${difficulty} projects:`, error);
      throw error;
    }
  }

  async searchProjects(keyword) {
    try {
      const response = await api.get(`/projects/search?keyword=${encodeURIComponent(keyword)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching projects:', error);
      throw error;
    }
  }
}

export default new ProjectService();