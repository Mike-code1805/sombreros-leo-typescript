import userRequest from "../requestMethods";

const deleteHatService = async (id) => {
  try {
    const data = await userRequest.delete(`/api/hat/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteHatService;
