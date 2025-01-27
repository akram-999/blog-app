import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section class="py-10 bg-sky-50 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img class="w-auto h-20" src="./blog-logo.png"  />

                <p class="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                
            </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">LINKS</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <Link to="/" title="" class="flex text-base text-black transition-all duration-200 hover:text-green-500 focus:text-green-500"> Home </Link>
                    </li>

                    <li>
                        <Link to='/blogs' title="" class="flex text-base text-black transition-all duration-200 hover:text-green-500 focus:text-green-500"> Blogs </Link>
                    </li>

                    <li>
                        <Link to='/contact' title="" class="flex text-base text-black transition-all duration-200 hover:text-green-500 focus:text-green-500"> Works </Link>
                    </li>

                    <li>
                        <Link to='/register' title="" class="flex text-base text-black transition-all duration-200 hover:text-green-500 focus:text-green-500"> Sing Up </Link>
                    </li>
                </ul>
            </div>

            

            <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" class="mt-6">
                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-orange-500 rounded-md hover:bg-orange-700 focus:bg-orange-700">Subscribe</button>
                </form>
            </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved by blog</p>
    </div>
</section>

  )
}
