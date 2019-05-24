import axios from 'axios';
import { token } from '../config/token';

export const GetView = async () => {
  return await axios.get('http://localhost:3000/webservices/GetView', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};

export const GetEnterpriseEvaluation = async () => {
  return await axios.get(
    'http://localhost:3000/webservices/GetEnterpriseEvaluation',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetPersonView = async () => {
  return await axios.get('http://localhost:3000/webservices/GetPersonaView', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};

export const GetF2Empresas = async () => {
  return await axios.get('http://localhost:3000/webservices/F2Empresas', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};

export const GetF2Persona = async () => {
  return await axios.get('http://localhost:3000/webservices/F2Persona', {
    headers: {
      Authorization: 'JERA ' + token(),
    },
  });
};
