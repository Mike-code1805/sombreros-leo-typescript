import userRequest from "../../requestMethods";

const createHatDeletedPermanently = async (hat) => {
  try {
    await userRequest.post(`/api/hatDeletedPermanently`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatDeletedPermanently;
