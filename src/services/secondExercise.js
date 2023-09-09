import { makeCall } from "../utils/httpHelper";

const requestHistoryData = () => makeCall({
    method: 'GET',
    path: '/v2/us/daily.json',
    isFirstExe: false,
  }).catch((error) => {
    throw error;
  })
export {

  requestHistoryData
} 