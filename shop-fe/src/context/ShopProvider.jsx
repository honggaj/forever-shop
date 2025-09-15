import { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
import { fetchProducts } from "../services/api";

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setLoading(true);
    fetchProducts(sortBy, order)
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [sortBy, order]);

  return (
<ShopContext.Provider value={{ products, loading, setSortBy, setOrder, sortBy, order }}>
      {children}
    </ShopContext.Provider>
  );
};
