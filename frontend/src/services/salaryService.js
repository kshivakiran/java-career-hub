import api from './api';

class SalaryService {

  async calculateSalary(experience, location, skills, education) {
    try {
      const params = new URLSearchParams({
        experience,
        location,
        skills
      });

      if (education) {
        params.append('education', education);
      }

      const response = await api.get(`/salary/calculate?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error calculating salary:', error);
      throw error;
    }
  }

  async getSalaryTrends() {
    try {
      const response = await api.get('/salary/trends');
      return response.data;
    } catch (error) {
      console.error('Error fetching salary trends:', error);
      throw error;
    }
  }
}

export default new SalaryService();