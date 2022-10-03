import userRequest from '../api/requestMethods';
import {Hat} from '../interfaces/state';

const editHatService = async (id: string, data: Hat) => {
  try {
    const res = await userRequest.put(`/api/hat/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default editHatService;
