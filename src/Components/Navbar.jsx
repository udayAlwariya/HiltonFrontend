import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { favouriteRestrauntsAtom } from "../atom";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export function Navbar() {
    const {pathname} = useLocation()
    const[toggle,setToggle] = useState(false)
    const scrollToServices = (e) => {
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
      }
      const favRestraunts = useRecoilValue(favouriteRestrauntsAtom)
  return (
    <>
      <div className="flex justify-around bg-customCream items-center py-6">
        {!toggle && <Link to="/" className="font-serif cursor-pointer text-[30px] sm:text-4xl">HILTON</Link>}

        <div className="xl:flex hidden space-x-5 text-lg font-semibold">
          <Link to="/" className="group relative cursor-pointer">
            <h1>HOME</h1>
            <div className="w-full hidden absolute group-hover:block h-[1px] bg-black"></div>
          </Link>
          {(pathname=="/")?<a href="#services" onClick={scrollToServices} className="group relative cursor-pointer">
            <h1>SERVICES</h1>
            <div className="w-full hidden absolute group-hover:block h-[1px] bg-black"></div>
          </a>:""}
          
          <Link onClick={()=>setToggle(false)}  to="/contact" className="group relative cursor-pointer">
            <h1>CONTACT</h1>
            <div className="w-full hidden absolute group-hover:block h-[1px] bg-black"></div>
          </Link>
          <Link className="group relative cursor-pointer">
            <h1>USER SETTINGS</h1>
            <div className="w-full hidden absolute group-hover:block h-[1px] bg-black"></div>
          </Link>
          <Link to="/favourites" className="group relative cursor-pointer">
            <h1>FAVOURITES</h1>
            {favRestraunts.length>0 && <h1 className="bg-red-600 absolute bottom-4 left-24 rounded-full w-5 h-5 flex text-white justify-center items-center text-[14px]">{favRestraunts.length}</h1> }
            <div className="w-full hidden absolute group-hover:block h-[1px] bg-black"></div>
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          {!toggle && <button className="sm:text-lg font-semibold border px-6 py-1 border-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 transition ease-in duration-300">
            {pathname=="/register"?<Link to="/signin">SIGN IN</Link>:<Link to="/register">REGISTER</Link>}
          </button>}
          {toggle?<h1 onClick={()=>setToggle(false)} className="text-5xl cursor-pointer xl:hidden"><RxCross2/></h1>:<h1 onClick={()=>setToggle(true)} className="sm:text-5xl text-3xl cursor-pointer xl:hidden"><IoMenuOutline /></h1>}
            
        </div>
      </div>
      {toggle && <div className="w-full text-center text-gray-700 h-[30vh] text-2xl font-semibold space-y-2 bg-customCream z-10 absolute">
           <Link to="/" className="cursor-pointer">
            <h1 onClick={()=>setToggle(false)}>HOME</h1>
          </Link>
          {(pathname=="/")?<a href="#services" onClick={scrollToServices} className="group relative cursor-pointer">
            <h1 onClick={()=>setToggle(false)}>SERVICES</h1>
          </a>:""}
          
          <Link to="/contact" className="cursor-pointer">
            <h1 onClick={()=>setToggle(false)}>CONTACT</h1>
          </Link>
          <Link className="cursor-pointer">
            <h1 onClick={()=>setToggle(false)}>USER SETTINGS</h1>
          </Link>
          <Link to="/favourites" className="relative cursor-pointer">
            <h1 onClick={()=>setToggle(false)}>FAVOURITES</h1>
            {favRestraunts.length>0 && <h1 className="bg-red-600 absolute bottom-4 left-16 rounded-full w-5 h-5 flex text-white justify-center items-center text-[14px]">{favRestraunts.length}</h1> }
          </Link>
        </div>}
    </>
  );
}
