import userRequest from '../api/requestMethods';
import {HatProps} from '../interfaces/interface';

export const editHatService = async (id: string, data: HatProps) => {
  const resp = await userRequest.put(`/api/hat/${id}`, data);
  return resp.data;
};
