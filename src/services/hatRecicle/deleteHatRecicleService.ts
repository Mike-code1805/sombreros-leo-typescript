import userRequest from '../../api/requestMethods';

const deleteHatRecicleService = async (id: string) => {
  try {
    const data = await userRequest.delete(`/api/hatRecicle/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteHatRecicleService;
