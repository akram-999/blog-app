import React  from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg" alt="" />
    </div>
    <div class="absolute inset-0 bg-gray-900/20"></div>

    <div class="relative max-w-lg px-4 mx-auto sm:px-0">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-900">Welcome back</h2>
                    
                    <p class="mt-2 text-base text-gray-600">Don’t have one? <Link to='/register' title="" class="text-orange-400 transition-all duration-200 hover:underline hover:text-orange-500">Create a free account</Link></p>
                    
                </div>


                <form action="#" method="POST" class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5">
                                <input type="email" name="" id="" placeholder="Enter email to get started" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>

                               </div>
                            <div class="mt-2.5">
                                <input type="password" name="" id="" placeholder="Enter your password" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-400 border border-transparent rounded-md focus:outline-none hover:bg-blue-500 focus:bg-blue-700">Log in</button>
                        </div>

                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

  )
}