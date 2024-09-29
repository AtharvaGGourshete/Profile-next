'use client'
import Login from "./login"
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { app } from "./config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        router.push('./');
      }
    });
  },[auth, router]);
  return (
    <main>
      <div>
          <div className="min-h-screen bg-gray-950 flex clear
          inline-flex w-full">
            <div>
              <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-10 mb-1">
                Welcome to the <span className="text-blue-600 dark:text-blue-500">DOMAIN</span> of<br />
                <h1 class="text-blue-600 dark:text-blue-500 py-10">
                  Atharva Ganesh Gourshete.
                </h1>{" "}
              </h1>
              <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 p-10 py-1">
                A Second Year Student at{" "}
                <span class="text-blue-600 dark:text-blue-500 ">
                <a href="https://www.apsit.edu.in/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">A.P. Shah Institute of Technology</a>
                </span>
                
              </p>
            </div>

            {/* <div className="text-white">0
              Get Started With Phone Number
            </div> */}

            


            <div className="flex items-center">
            <div className="item -space-y-1 text-center flex flex-col items-top justify-top mr-10 mt-20">
                <img class="transition delay-150 inline-flex duration-300 ease-in-out" src="./atharvaisjohnwick.png" height={1000} width={1000} alt="" />
              </div>
            </div>
            <hr/>
          </div>
          
        </div>
    </main>
  );
}
