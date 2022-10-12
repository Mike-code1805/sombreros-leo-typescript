import userRequest from '../api/requestMethods';

export const deleteHatService = async (id: string) => {
  const resp = await userRequest.delete(`/api/hat/${id}`);
  return resp.data;
};
