import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


const Navbar = () => {
  const [nav,setNav]=useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center  p-4'>
      {/* left side */}
     <div className="flex items-center">
     <div onClick={()=> setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Best <span className="font-bold">Eats</span>
      </h1>
      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="bg-black rounded-full text-white p-2">Delivery</p>
        <p className="p-2">Pickup </p>
      </div>
     </div>
     {/* search input */}
     <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent focus:outline-none p-2 w-full" type="text" placeholder="Search foods"/>
    </div>
    {/* cart button */}
    <button className="bg-black rounded-full text-white md:flex items-center py-2">
    <BsFillCartFill className="mr-2" size={20} /> Cart
    </button>
   {/* mobile menu */}
   {/* overlay */} 
   {nav?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
   </div> : ""}
   {/* side menu */}
   <div className={nav? "bg-white fixed top-0 left-0 z-10 duration-300 w-[300px] h-screen" : "bg-white fixed top-0 left-[-100%] z-10 duration-300 w-[300px] h-screen"}>
    <AiOutlineClose onClick={()=>setNav(!nav)} className="absolute  right-4 top-4 cursor-pointer" size={30} />
    <h2 className="text-3xl p-4 ">Best <span className="font-bold">Eats</span></h2>
    <nav>
        <ul className="flex flex-col text-gray-800 p-4">
            <li className="text-xl py-4 flex"> <TbTruckDelivery size={25} className="mr-4" />Orders</li>
            <li className="text-xl py-4 flex"> <MdFavorite size={25} className="mr-4" />Favourites</li>
            <li className="text-xl py-4 flex"> <FaWallet size={25} className="mr-4" />Wallet</li>
            <li className="text-xl py-4 flex"> <MdHelp size={25} className="mr-4" />Help</li>
            <li className="text-xl py-4 flex"> <AiFillTag size={25} className="mr-4" />Promotions</li>
            <li className="text-xl py-4 flex"> <BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
            <li className="text-xl py-4 flex"> <FaUserFriends size={25} className="mr-4" />Invite Friends</li>

        </ul>
    </nav>
   </div>
    </div>
  );
};

export default Navbar;
