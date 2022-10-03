import userRequest from '../../api/requestMethods';
import {Hat} from '../../interfaces/state';

const createHatRecicleService = async (hat: Hat) => {
  try {
    await userRequest.post(`/api/hatRecicle/`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatRecicleService;
