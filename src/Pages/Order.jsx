import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container py-8 px-4 md:px-16 lg:px-24">
      <h3 className="font-poppins text-2xl font-semibold mb-4">
        Thank you for your order
      </h3>
      <p className="font-poppins font-normal">
        Your Order has been placed successfully you will recieve an email
        confirmation shortly
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="font-poppins text-lg font-semibold mb-2">
          Order Summary
        </h3>
        <p className="font-poppins font-normal">
          Order Number: {order.orderNumber}
        </p>
        <div className="mt-4">
          <h2 className="font-poppins text-md font-semibold mb-2">
            Shipping Information
          </h2>
          <p className="font-poppins font-normal">
            {order.shippingInformation.address}
          </p>
          <p className="font-poppins font-normal">
            {order.shippingInformation.city}
          </p>
          <p className="font-poppins font-normal">
            {order.shippingInformation.zip}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-poppins text-md font-semibold mb-2">
            Products Ordered
          </h3>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between">
              <p className="font-poppins font-normal">
                {product.name} x {product.quantity}
              </p>
              <p className="font-poppins font-normal">
                ${product.price * product.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span className="font-poppins font-normal">Total Price:</span>
          <span className="font-poppins font-semibold">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-4">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 duration-300 rounded font-poppins font-medium">
          Track Order
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white py-2 px-4 hover:bg-red-800 duration-300 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
