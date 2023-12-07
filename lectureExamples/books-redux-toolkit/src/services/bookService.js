import axios from "axios";

const url = "https://65416188f0b8287df1fe4c19.mockapi.io/books";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendData = async (title) => {
  try {
    const response = await axios.post(url, {
      id: Date.now(),
      title: title,
      authorId: null,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
