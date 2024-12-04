import axios from "axios";

const base_url_api = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getFolders = async () => {
  const response = await axios.get(`${base_url_api}/folder`);
  return response.data;
};

export const getFolderByParentId = async (parentId: string) => {
  const response = await axios.get(`${base_url_api}/folder/${parentId}`);
  return response.data;
};
