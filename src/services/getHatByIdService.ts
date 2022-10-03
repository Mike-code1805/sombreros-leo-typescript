import userRequest from '../api/requestMethods';

const getHatByIdService = async (id: string) => {
  try {
    const data = await userRequest.get(`/api/hat/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getHatByIdService;
