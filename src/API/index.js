import axios from 'axios';

export const Tasks = async data => {
  return await axios.post('http://localhost:9001/api/tasks/getTasks', data, {
    headers: {
      'x-haip': 'X-HAIP-2771',
    },
  });
};
