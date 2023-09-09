import { makeCall } from "../utils/httpHelper";

const requestGenderizedData = (pathParams) => makeCall({
  method: 'GET',
  path: '/api/genderize',
  pathParams,
  isFirstExe: true,
}).catch((error) => {
  throw error;
})
const requestNationalizedData = (pathParams) => makeCall({
    method: 'GET',
    path: '/api/nationalize',
    pathParams,
    isFirstExe: true,
  }).catch((error) => {
    throw error;
  })
  const requestAgifyData = (pathParams) => makeCall({
    method: 'GET',
    path: '/api/agify',
    pathParams,
    isFirstExe: true,
  }).catch((error) => {
    throw error;
  })
export {
  requestGenderizedData,
  requestNationalizedData,
  requestAgifyData
} 