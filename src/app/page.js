"use client";
import { Basket, House, Package, User } from "@phosphor-icons/react";
import Image from "next/image";
import { Children } from "react";

export default function Home() {
  return (
    <>
      <Beranda />
    </>
  );
}

function Login() {
  return (
    <div
      className="w-screen h-screen grid place-items-center bg-no-repeat bg-cover bg-center rotate-180"
      style={{ backgroundImage: "url(Logo/logobg.jpg)" }}
    >
      <div className="size-28 absolute top-8 left-8">
        <img src="Logo/orenn.png" />
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
      </div>
    </aside>
  );
}
