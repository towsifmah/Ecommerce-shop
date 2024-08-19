import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "../Components/Model";
import ChangeAddress from "../Components/ChangeAddress";
const imptyCart = "https://i.ibb.co/x7c3jjS/emptycart.png";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main stret, 3540");
  const [ismodelOpen , setismodelOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="container py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-4">
            SHOPPING CART
          </h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold font-poppins">
                <p className="font-poppins font-normal">PRODUCTS</p>
                <div className="flex space-x-10">
                  <p className="font-poppins font-normal">PRICE</p>
                  <p className="font-poppins font-normal">QUANTITY</p>
                  <p className="font-poppins font-normal">SUBTOTAL</p>
                  <p className="font-poppins font-normal">REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between pb-2 border-b "
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded object-contain"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold font-poppins">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p className="font-poppins text-sm">{product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button onClick={() => dispatch(decreaseQuantity(product.id))} className="text-xl font-bold font-poppins px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2 font-poppins">
                          {product.quantity}
                        </p>
                        <button onClick={() => dispatch(increaseQuantity(product.id))} className="text-xl font-bold font-poppins px-1 border-l">
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button onClick={() => dispatch(removeFromCart(product.id))} className="text-red-500 hover:text-red-700 duratio-300">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-sm font-semibold font-poppins mb-5">
                CART TOTAL
              </h2>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm font-poppins">Total Item</span>
                <span className="font-poppins">{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p className="font-poppins">Shipping:</p>
                <div className="flex items-center gap-2">
                  <p className="font-poppins">Shipping to:</p>
                  <span className="text-sm font-bold font-poppins">
                    {address}
                  </span>
                </div>
                <button onClick={() =>setismodelOpen(true)} className="text-blue-500 hover:underline mt-1 font-poppins font-medium text-sm">
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-poppins">Total Price:</span>
                <span className="font-poppins">
                  {cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <button onClick={() =>navigate("/checkoutpage")} className="w-full bg-red-600 text-white py-2 font-poppins font-medium hover:bg-red-800 duration-300 rounded">
                Proced to checkout
              </button>
            </div>
          </div>
          <Model ismodelOpen={ismodelOpen}
          setismodelOpen={setismodelOpen}>
            <ChangeAddress setAddress={setAddress} setismodelOpen={setismodelOpen}/>
          </Model>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <img className="h-96" src={imptyCart} alt="" />
          </div>
          <div className="text-center pb-6 mt-[-35px]">
            <h3 className="font-poppins text-md font-semibold text-gray-600">
              Your Cart is Empty
            </h3>
            <p className="font-poppins text-lg font-medium text-gray-800">
              Add something to make me happy:)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
