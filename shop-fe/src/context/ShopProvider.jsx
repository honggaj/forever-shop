import { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
import { fetchProducts as fetchProductsAPI } from "../services/api";

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [category, setCategory] = useState("");

  const fetchProducts = async (categorySlug = "") => {
    setLoading(true);
    try {
      const data = await fetchProductsAPI(sortBy, order, categorySlug);
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [sortBy, order, category]);

  return (
    <ShopContext.Provider
      value={{
        products,
        loading,
        sortBy,
        order,
        setSortBy,
        setOrder,
        fetchProducts,
        setCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
