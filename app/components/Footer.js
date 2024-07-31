import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950 text-white flex p-10 text-lg justify-center flex'>
      

<footer class="flex w-full bg-white rounded-lg shadow dark:bg-gray-900 -m-6">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Atharva Ganesh Gourshete</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {/* <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li> */}
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6 ml-4">Log In</a>
                </li>
                <li>
                    <a href="/hobbies" class="hover:underline me-4 md:me-6">Hobbies</a>
                </li>
                <li>
                    <a href="/career" class="hover:underline">Career</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">PROFILE™</a>. All Rights Reserved by Atharva Ganesh Gourshete.</span>
    </div>
</footer>


      </div>
  )
}

export default Footer