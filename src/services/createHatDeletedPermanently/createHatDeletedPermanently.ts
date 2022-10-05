import userRequest from '../../api/requestMethods';
import {HatProps} from '../../interfaces/interface';

const createHatDeletedPermanently = async (hat: HatProps) => {
  try {
    await userRequest.post(`/api/hatDeletedPermanently`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatDeletedPermanently;
