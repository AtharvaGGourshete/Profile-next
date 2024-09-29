"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className="justify-between">
      <ul className="flex bg-gray-950 text-white hover:shadow-blue-500 justify-between items-center align-center h-20 space-center text-lg ">
        
        <Link href={"/"}>
        <button className="text-1xl mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-950 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-500 hover:text-2xl hover:before:h-56 hover:before:w-56 hover:text-black ml-5">
            <span className="relative z-10 text-xl mx-4">HOME</span>
          </button>
        </Link>

        <Link href={"/career"}>
          <button className="text-1xl mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-950 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-500 hover:text-2xl hover:before:h-56 hover:before:w-56 hover:text-black">
            <span className="relative z-10">Career</span>
          </button>
        </Link>

        <Link href={"/hobbies"}>
          <button className="text-1xl mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-950 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-500 hover:text-2xl hover:before:h-56 hover:before:w-56 hover:text-black">
            <span className="relative z-10">Hobbies</span>
          </button>
        </Link>

        <li>
          <Link href={"/login"}>
            <button className="mt-4 text-red hover:before:bg-red border-blue-500 relative h-[50px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:text-2xl hover:shadow-blue-500 hover:before:left-0 hover:before:w-full mx-4 hover:text-black">
              <span className="relative z-10">Log In</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
