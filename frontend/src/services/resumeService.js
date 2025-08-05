import api from './api';

class ResumeService {

  async getAllTemplates() {
    try {
      const response = await api.get('/resume/templates');
      return response.data;
    } catch (error) {
      console.error('Error fetching resume templates:', error);
      throw error;
    }
  }

  async getTemplateById(id) {
    try {
      const response = await api.get(`/resume/templates/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching template ${id}:`, error);
      throw error;
    }
  }
}

export default new ResumeService();