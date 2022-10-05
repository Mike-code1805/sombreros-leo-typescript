import userRequest from '../../api/requestMethods';
import { HatProps } from '../../interfaces/interface';

const createHatRecicleService = async (hat: HatProps) => {
  try {
    await userRequest.post(`/api/hatRecicle/`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatRecicleService;
