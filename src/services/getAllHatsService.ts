import userRequest from '../api/requestMethods';

export const getAllHatsService = async () => {
  const resp = await userRequest.get('/api/hat');
  return resp.data;
};
