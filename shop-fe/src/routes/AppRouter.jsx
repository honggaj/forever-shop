import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import PlaceOrder from "../pages/PlaceOrder";

export default function AppRouter() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/place-order" element={<PlaceOrder />} />
    </Routes>
    </>
  );
}
