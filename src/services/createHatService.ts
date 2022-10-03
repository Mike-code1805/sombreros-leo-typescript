import userRequest from '../api/requestMethods';
import {HatProps} from '../interfaces/interface';

const createHatService = async (hat: HatProps) => {
  try {
    await userRequest.post(`/api/hat/`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatService;
