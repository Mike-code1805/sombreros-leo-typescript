import userRequest from "../requestMethods";


const getHatByIdService = async (id) => {
  try {
    const data = await userRequest.get(`/api/hat/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getHatByIdService;
