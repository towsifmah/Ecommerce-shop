import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../Components/ProductsCard";
import { setProducts } from "../redux/ProductSlice";
import { Product10 } from "../assets/MockData";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(Product10));
  }, []);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-center font-poppins text-2xl font-bold my-6">
        Shop All Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((product) => (
          <div key={product.id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
