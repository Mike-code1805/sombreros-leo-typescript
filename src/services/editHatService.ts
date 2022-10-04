import userRequest from '../api/requestMethods';
import { HatProps } from '../interfaces/interface';

const editHatService = async (id: string, data: HatProps) => {
  try {
    const res = await userRequest.put(`/api/hat/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default editHatService;
