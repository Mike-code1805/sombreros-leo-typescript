import userRequest from "../../requestMethods";

const deleteHatRecicleService = async (id) => {
  try {
    const data = await userRequest.delete(`/api/hatRecicle/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteHatRecicleService;
