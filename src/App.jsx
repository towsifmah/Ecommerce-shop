import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import CheckoutPage from "./Pages/CheckoutPage";
import { useState } from "react";
import Order from "./Pages/Order";
import FilterData from "./Pages/FilterData";
import ProductDetail from "./Pages/ProductDetail";
function App() {
  const [order , setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkoutpage" element={<CheckoutPage setOrder={setOrder}/>}></Route>
        <Route path="/order_confirmation" element={<Order order={order}/>}></Route>
        <Route path="/filter-data" element={<FilterData/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
