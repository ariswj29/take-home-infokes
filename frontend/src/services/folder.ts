import axios from "axios";

const base_url_api = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getFolders = async () => {
  const response = await axios.get(`${base_url_api}/folder`);
  return response.data;
};

export const getFolderByParentId = async (
  parentId: number,
  search?: string,
  sort?: string
) => {
  const response = await axios.get(`${base_url_api}/folder/${parentId}`, {
    params: { search, sort },
  });
  return response.data;
};

export const getBreadcrumb = async (parentId: number) => {
  const response = await axios.get(
    `${base_url_api}/folder/breadcrumb/${parentId}`
  );
  return response.data;
};
