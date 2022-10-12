import userRequest from '../api/requestMethods';

export const getHatByIdService = async (id: string) => {
  const resp = await userRequest.get(`/api/hat/${id}`);
  return resp.data.hat;
};
