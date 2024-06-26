import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from the cart");
  };
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to the cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 mt-10 p-4 ml-5 rounded-xl outline">
      <div>
        <p className="text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div>
        <p className="font-normal text-[10px] w-40 text-left  text-gray-400">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} />
      </div>

      <div className="flex justify-between items-center gap-12 w-full mt-5">
        <div>
          <p className="font-semibold text-green-600">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold px-3 text-[12px] uppercase p-1
          hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold px-3 text-[12px] uppercase p-1
          hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
