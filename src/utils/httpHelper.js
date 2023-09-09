import axios from 'axios';

const API_FIRST_EXE_URL = import.meta.env.VITE_API_URL;
const API_SECOND_EXE_URL = import.meta.env.VITE_HISTORIC_API_URLL;
const makeCall = ({
  method = 'GET',
  path,
  data,
  params,
  pathParams,
  multipart = false,
  responseType = undefined,
  isFirstExe = true,
}) => new Promise((resolve, reject) => {
  const url = `${isFirstExe ? API_FIRST_EXE_URL : API_SECOND_EXE_URL }${path}/${pathParams.name || ''}`;

  const headers = {};

  if (multipart) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  axios.request({
    method,
    url,
    data,
    headers,
    params,
    responseType,
  })
    .then((response) => resolve(response.data))
    .catch((error) => {
      reject(error);
    });
});

export {
  makeCall,
};
