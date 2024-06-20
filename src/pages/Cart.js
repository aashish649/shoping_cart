import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-16 max-w-6xl p-6 mx-auto">
          <div className="lg:w-[70%]">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemindex={index} />;
            })}
          </div>

          <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
            <div className="mt-20">
              <p className="text-xl font-[700] text-[#16a34a] uppercase  ">
                Your Cart
              </p>
              <p className="text-5xl text-green-700 font-[700] uppercase mb-4 ">
                Summary
              </p>
              <p className="text-2xl font-[700] text-gray-700 ">
                Total Items : <span> {cart.length} </span>
              </p>
            </div>

            <div className="mb-20">
              <p className="text-slate-700 text-xl font-[600] mb-5 ">
                Total Amount:
                <span className="font-bold ml-2 text-black">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
              <button
                className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in"
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-6 ">
          <h1 className="text-xl font-[600]"> Your cart is empty</h1>
          <Link to={"/"}>
            <button
              className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300"
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
