import axios from 'axios';
import { token } from '../config/token';

export const GetEnterpriseView = async () => {
  return await axios.get(
    'https://devcorporateindex.com/faseuno/webservices/getenterprisesurvey',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetInscribed = async () => {
  return await axios.get(
    'https://devcorporateindex.com/faseuno/webservices/GetEnterpriseEvaluation',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetPersonView = async () => {
  return await axios.get(
    'https://devcorporateindex.com/faseuno/webservices/getpersonalsurvey',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetF2Empresas = async () => {
  return await axios.get(
    'https://devcorporateindex.com/fasedos/webservices/F2Empresas',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};

export const GetF2Persona = async () => {
  return await axios.get(
    'https://devcorporateindex.com/fasedos/webservices/F2Persona',
    {
      headers: {
        Authorization: 'JERA ' + token(),
      },
    }
  );
};
