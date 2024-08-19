import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "../Components/ProductsCard";
const notFound = "https://i.ibb.co/BTBwWHz/no-product.png";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filterProducts.length > 0 ?
        <>
        <h2 className="text-center font-poppins text-2xl font-bold my-6">
        Shop All Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filterProducts.map((product) => (
          <div key={product.id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
        </>
        :
       <>
       <div className="flex justify-center">
            <img className="h-96" src={notFound} alt="" />
          </div>
          <div className="text-center pb-6 mt-[-35px]">
            <h3 className="font-poppins text-md font-semibold text-gray-600">
              Product is Not Found
            </h3>
          </div>
       </>
         }
      
    </div>
  );
};

export default FilterData;
