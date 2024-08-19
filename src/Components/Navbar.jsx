import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import Login from "./Login";
import Ragistration from "./Ragistration";
import { setSearchTerm } from "../redux/ProductSlice";
const Navbar = () => {
  const [ismodelOpen , setismodelOpen] = useState(false);
  const [isLogin , setisLogin] = useState(true);
  const [search , setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handelSearch = (e) =>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate("/filter-data")
  }

  const openSingup = () =>{
    setisLogin(false)
    setismodelOpen(true)
  }
  const openLogin = () =>{
    setisLogin(true)
    setismodelOpen(true)
  }


  const products = useSelector(state  => state.cart.products);
  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold font-poppins">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handelSearch}>
            <input
            onChange={(e) =>setSearch(e.target.value)}
              className="w-full border py-4 px-4 font-poppins text-md font-medium  placeholder:font-poppins placeholder:text-md placeholder:font-medium"
              type="search"
              placeholder="Search Product"
            />
            <FaSearch className="absolute top-5 right-3 text-black text-lg cursor-pointer" />
          </form>
        </div>
        <div className="flex items-center gap-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-2 text-sm w-4 h-4 left-2 p-2 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button onClick={() =>setismodelOpen(true)} className="hidden md:block font-poppins text-sm font-medium">
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-6 lg:gap-x-16 py-4 font-poppins text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Model ismodelOpen={ismodelOpen} setismodelOpen={setismodelOpen}>
        {isLogin ? <Login openSingup={openSingup}/> : <Ragistration openLogin={openLogin}/>}
      </Model>
    </nav>
  );
};

export default Navbar;
