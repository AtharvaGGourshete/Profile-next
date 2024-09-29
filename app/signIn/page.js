'use client'
import React from 'react'
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { app } from '../config';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from '../login';

const page = () => {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if(user){
        router.push('./dashboard');
      }
    });
  },[auth, router]);
  return (
    <div className="min-h-screen bg-black text-center font-bold text-3xl flex justify-center p-10">
      <h1 className='text-white inline-block'></h1><br/>
        <Login/>
        </div>
  )
}

export default page