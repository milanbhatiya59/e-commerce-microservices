import api from "../api"

const getRestaurant = async () => {
  try {
    const response = await api.get(`/restaurant`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    throw error;
  }
};

export { getRestaurant };
