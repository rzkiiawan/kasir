"use client";
import { Basket, House, Package, SignOut, User } from "@phosphor-icons/react";
import Image from "next/image";
import { Children } from "react";
import Logo from "../../public/Logo/logobg.jpeg"

export default function Home() {
  return (
    <>
      <Beranda/>
    </>
  );
}

function Login() {
  return (
    <div
      className="w-screen h-screen grid place-items-center bg-no-repeat bg-cover bg-center bg-[url(../../public/Logo/logobg.jpeg)]"
      // style={{ backgroundImage: "url(../../public/assets/logobg.jpeg)" }}
    >
      <div className="size-28 absolute top-8 left-8">
        <img src="Logo/logooren.png" />
      </div>
      <div className="bg-[#f27a2f] p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              type="Username"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              className="bg-white hover:bg-[#EBB99B] text-[#F27A2F] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-12 "
              type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Beranda() {
  return (
    <aside className="fixed">
      <div className="bg-[#033682] p-6 w-screen flex justify-start pl-72 ">
        <h1 className="text-xl font-bold text-white">DASHBOARD</h1>
      </div>
      {/* <div className="p-16 h-28 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center space-x-4 mt-14 ml-72">
      <div className="">
        <h1 className="text-base font-normal text-[#F27A2F] text-center">Total Produk</h1>
        <p className="text-[#033682] font-semibold p-3 text-5xl text-center">4</p>
      </div>
    </div>
    <div className="p-16 h-28 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center space-x-4 mt-14 ml-72">
      <div className="">
        <h1 className="text-base font-normal text-[#F27A2F] text-center space-x-10">Total Produk</h1>
        <p className="text-[#033682] font-semibold p-3 text-5xl text-center">4</p>
      </div>
    </div> */}
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-8">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
    </div>
      <div className="h-screen w-[250px] bg-[#F27A2F] flex items-center pt-20 flex-col drop-shadow-[3px_3px_3px_#000000] fixed top-0 mb-5">
        <div className="size-20">
          <img src="Logo/logo.png" alt="logo" />
        </div>
        <div>
          <button className="bg-[#F27A2F] flex gap-4 flex-row justify-start items-center w-[210px] text-white hover:bg-white hover:text-[#F27A2F] font-bold py-3 rounded-full text-sm pr-12 pl-3">
            <House size={25} />
            <span>BERANDA</span>
          </button>
        </div>
        <div>
          <button className="bg-[#F27A2F] flex gap-4 flex-row justify-start items-center w-[210px] text-white hover:bg-white hover:text-[#F27A2F] font-bold py-3 rounded-full text-sm pr-12 pl-3">
            <Package size={25}/>
            <span>BARANG</span>
          </button>
        </div>
        <div>
          <button className="bg-[#F27A2F] flex gap-4 flex-row justify-start items-center w-[210px] text-white hover:bg-white hover:text-[#F27A2F] font-bold py-3 rounded-full text-sm pr-12 pl-3">
            <Basket size={25}/>
            <span>PEMBELIAN</span>
          </button>
        </div>
        <div>
          <button className="bg-[#F27A2F] flex gap-4 flex-row justify-start items-center w-[210px] text-white hover:bg-white hover:text-[#F27A2F] font-bold py-3 rounded-full text-sm pr-12 pl-3">
          <User size={25}/>
          <span>
            REGISTRASI
          </span>
          </button>
        </div>
        <div className="mt-52">
          <button className="bg-[#F27A2F] flex gap-4 flex-row justify-start items-center w-[210px] text-white hover:bg-white hover:text-[#F27A2F] font-bold py-3 rounded-full text-sm pr-12 pl-3">
          <SignOut size={25}/>
          <span>
            Logout
          </span>
          </button>
        </div>
      </div>
    </aside>
  );
}


function Konten() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
      <img src="Logo/logooren.png" width={50} height={50} />      
      </div>
      <div>
        <div className="text-xl font-medium text-black">MR. Jussie</div>
        <p className="text-slate-500">ASHAHSKJHSAHSKJAH</p>
      </div>
    </div>
  );
 }