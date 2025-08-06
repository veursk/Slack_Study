import axios from 'axios';

/*
fetchef를 잘 활용해야 SWR을 잘 사용하고 있다고 볼 수 있다.
비동기만 가능한게 아니라 SWR을 동기적 코드에도 사용할 수 있는데다가, 프론트에서 API response만 SWR을 사용하지말고, response.length와 같이 변화한 모습도 SWR로 활용해보기
*/
const fetcher = (url: string) => {
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);
};
export default fetcher;
