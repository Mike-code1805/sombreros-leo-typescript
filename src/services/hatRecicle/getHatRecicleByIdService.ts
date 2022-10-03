import userRequest from '../../api/requestMethods';

const getHatRecicleByIdService = async (id: string) => {
  try {
    const data = await userRequest.get(`/api/hatRecicle/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getHatRecicleByIdService;
