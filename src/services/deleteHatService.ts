import userRequest from '../api/requestMethods';

const deleteHatService = async (id: string) => {
  try {
    const data = await userRequest.delete(`/api/hat/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteHatService;
