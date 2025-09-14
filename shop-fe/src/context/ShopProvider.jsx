import { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
import { fetchProducts } from "../services/api";

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <ShopContext.Provider value={{ products, loading }}>
      {children}
    </ShopContext.Provider>
  );
};
