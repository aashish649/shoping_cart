import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import {remove} from "../redux/Slices/CartSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemindex}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className='p-4 border-b-2 last:border-none border-slate-700'>
      <div className='flex justify-between flex-col gap-14 md:flex-row py-3 px-3'>
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        </div>

        <div className='md:w-[70%] w-full flex flex-col gap-5'>
          <h1 className='text-xl font-[600] text-slate-800'>{item.title} </h1>
          <h1 className='text-lg text-slate-700'>{item.description.split(" ").slice(0,15).join(" ") + "..."} </h1>
          <div className='flex justify-between'>
          <div className='font-bold text-[#16a34a] text-lg'>
            <p>${item.price}</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all" onClick={removeFromCart}>
            <FcDeleteDatabase fontSize={25} className="group-hover:text-white text-red-800 transition-all" />
          </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;


