import api from "../api";
const getDelivery = async () => {
  try {
    const response = await api.get(`/delivery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching delivery data:", error);
    throw error;
  }
};

export { getDelivery };
