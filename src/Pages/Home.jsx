import React, { useEffect } from "react";
import { Categories, Product10 } from "../assets/MockData";
import InfoSection from "../Components/InfoSection";
import Category from "../Components/Category";
const bannerImg = "https://i.ibb.co/YR91NbX/Welcome-to.png";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductsCard from "../Components/ProductsCard";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(Product10));
  }, []);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container py-4 flex flex-col md:flex-row gap-x-2">
          <div className="w-full md:w-3/12">
            <h3 className="bg-red-600 text-white text-sm font-bold font-poppins px-2 py-2.5">
              SHOP BY CATEGORIES
            </h3>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={bannerImg} alt="" />
            <div className="absolute top-12 md:top-16 left-9 md:left-12 text-white">
              <p className="text-gray-400 text-sm md:text-lg font-poppins font-medium mb-1 md:mb-4">
                Code With Mahmud
              </p>
              <h3 className="text-base md:text-3xl font-bold font-poppins">
                WELCOME TO E-SHOP
              </h3>
              <p className="text-lg md:text-xl md:mt-2.5 font-bold font-poppins text-gray-400">
                MILLIONS+ PRODUCTS
              </p>
              <button
                onClick={() => navigate("/shop")}
                className="bg-red-600 px-4 md:px-8 py-1.5 text-white mt-4 font-poppins text-sm md:text-xl hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <Category />

      <div className="container">
        <h2 className="text-center font-poppins text-2xl font-bold my-6">
          Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 cursor-pointer">
          {products.products.slice(0, 5).map((product) => (
            <div key={product.id}>
              <ProductsCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Shop />
    </>
  );
};

export default Home;
