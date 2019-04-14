import axios from 'axios';
import { token } from '../config/token';

export const GetView = async () => {
  return await axios.get('http://localhost:3001/webservices/GetView', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};

export const GetEnterpriseEvaluation = async () => {
  return await axios.get(
    'http://localhost:3001/webservices/GetEnterpriseEvaluation',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetPersonView = async () => {
  return await axios.get('http://localhost:3001/webservices/GetPersonaView', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};
