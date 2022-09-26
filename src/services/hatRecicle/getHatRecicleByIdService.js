import userRequest from "../../requestMethods";

const getHatRecicleByIdService = async (id) => {
  try {
    const data = await userRequest.get(`/api/hatRecicle/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getHatRecicleByIdService;
