import api from "../api"

const getMenu = async () => {
  try {
    const response = await api.get(`/menu`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};

export { getMenu };
