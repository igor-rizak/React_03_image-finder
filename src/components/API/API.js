import axios from 'axios';
const KEY = '36675802-f1fae2e3ce3b586e4e267c1aa';

export const restApi = async (value, page = 1) => {
  if (value) {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&im"age_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data;
    } catch (error) {
      console.log('Error fetching data:', error.message);
      throw error;
    }
  }
};
