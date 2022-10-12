import userRequest from '../api/requestMethods';
import {HatProps} from '../interfaces/interface';

export const createHatService = async (hat: HatProps) => {
  const resp = await userRequest.post(`/api/hat/`, hat);
  return resp.data;
};
