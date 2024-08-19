import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ setOrder }) => {
  const [billingToggle, setbillingTggle] = useState(true);
  const [shippingToggle, setshippingTggle] = useState(true);
  const [paymentToggle, setpaymentTggle] = useState(true);

  const [paymentMethod, setpaymentMathod] = useState("cod");
  const [shippingInf, setshippingInf] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "1234567",
      shippingInformation: shippingInf,
      totalPrice: cart.totalPrice,
    };
    
    setOrder(newOrder);
    navigate("/order_confirmation");
  };
  return (
    <div className="container py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold font-poppins mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* billing inf */}
          <div className="border rounded p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setbillingTggle(!billingToggle)}
            >
              <h2 className="text-lg font-poppins font-semibold mb-2">
                Billing Information
              </h2>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Your Number"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                />
              </div>
            </div>
          </div>
          {/* shipping inf */}
          <div className="border rounded p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setshippingTggle(!shippingToggle)}
            >
              <h2 className="text-lg font-poppins font-semibold mb-2">
                Shipping Information
              </h2>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Your Address"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                  onChange={(e) =>
                    setshippingInf({ ...shippingInf, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="Enter your City Name"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                  onChange={(e) =>
                    setshippingInf({ ...shippingInf, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Zip Code
                </label>
                <input
                  name="zip code"
                  type="text"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border font-poppins placeholder:font-poppins"
                  onChange={(e) =>
                    setshippingInf({ ...shippingInf, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/* payment method */}
          <div className="border rounded p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setpaymentTggle(!paymentToggle)}
            >
              <h2 className="text-lg font-poppins font-semibold mb-2">
                Payment Method
              </h2>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center gap-x-2 mb-2">
                <input
                  name="Payment"
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMathod("cod")}
                />
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center gap-x-2 mb-2">
                <input
                  name="Payment"
                  type="radio"
                  checked={paymentMethod === "dc"}
                  onChange={() => setpaymentMathod("dc")}
                />
                <label
                  className="block text-gray-700 font-poppins"
                  htmlFor="Name"
                >
                  Debit Card
                </label>
              </div>
              {paymentMethod == "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-poppins font-semibold mb-4">
                    Dabit Card information
                  </h3>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold font-poppins mb-2"
                      htmlFor=""
                    >
                      Card Number
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter Card Number"
                      className="border p-2 w-full rounded font-poppins placeholder:font-poppins"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold font-poppins mb-2"
                      htmlFor=""
                    >
                      Card Holder Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter Card Holder Number"
                      className="border p-2 w-full rounded font-poppins placeholder:font-poppins"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 font-semibold font-poppins mb-2"
                        htmlFor=""
                      >
                        Expire Date
                      </label>
                      <input
                        className="border p-2 w-full rounded font-poppins placeholder:font-poppins "
                        required
                        type="date"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 font-semibold font-poppins mb-2"
                        htmlFor=""
                      >
                        CVV
                      </label>
                      <input
                        className="border p-2 w-full rounded"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-lg font-semibold font-poppins mb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold font-poppins">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-poppins">
                      ${product.price} × {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800 font-poppins">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span className="font-poppins">Total Price:</span>
              <span className="font-semibold font-poppins">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800 duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
