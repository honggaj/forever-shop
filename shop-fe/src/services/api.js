// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = async (
  sortBy = "createdAt",
  order = "desc",
  category = ""
) => {
  const res = await API.get("/products", {
    params: { sortBy, order, category }, // thêm category vào params
  });
  return res.data;
};

export const fetchCategories = async () => {
  const res = await API.get("/categories");
  return res.data;
};
