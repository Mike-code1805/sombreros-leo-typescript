import userRequest from "../../requestMethods";

const createHatRecicleService = async (hat) => {
  try {
    await userRequest.post(`/api/hatRecicle/`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatRecicleService;
