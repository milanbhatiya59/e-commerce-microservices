import api from "../api";

const getOrder = async () => {
  try {
    const response = await api.get(`/order`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order data:", error);
    throw error;
  }
};

export { getOrder };
