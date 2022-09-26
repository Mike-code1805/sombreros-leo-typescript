import userRequest from "../requestMethods";

const editHatService = async (id, data) => {
  try {
    const res = await userRequest.put(`/api/hat/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default editHatService;
