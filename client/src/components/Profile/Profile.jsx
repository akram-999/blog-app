import React from 'react'
import { TiUserDelete } from "react-icons/ti";

export default function Profile() {
  return (
    <>
    <section class="relative pt-40 pb-24">
    <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" class="w-full absolute top-0 left-0 z-0 h-60 object-cover"/>
    <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image"
                class="border-4 border-solid border-white rounded-full object-cover"/>
        </div>
        <div class="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div class="block">
                <h3 class="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Emma Smith</h3>
                <p class="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Engineer at BB Agency Industry <br class="hidden sm:block" />New
                    York, United States</p>
            </div>
            <div class="flex gap-4">
                <div
                    class="py-3.5 px-5 block rounded-lg bg-orange-100 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-orange-200">
                    <span class="px-5 font-semibold text-base leading-7 text-orange-500">321</span> <br/>
                    <span class="px-5 font-semibold text-base leading-7 text-gray-900">Posts</span>

                </div>
                <button
                    class="py-3.5 px-5 block rounded-lg bg-red-500 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-600">
                    <TiUserDelete className='text-white size-6'/> <br/>
                    <span class=" font-semibold text-base leading-7 text-white">Delete account</span>


                </button>
            </div>
        </div>
        {/* <div class="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">Ux Research</a>
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">CX Strategy</a>
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">Project Manager</a>
        </div> */}
    </div>
</section>
       
       
        <section class="py-24 relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
                    <div class="w-full flex-col justify-center items-center gap-4 flex">
                        <h2 class="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Update user form</h2>
                      </div>
                    <div class="w-full flex-col justify-start items-start gap-6 flex">
                        <h4 class="text-gray-900 text-xl font-semibold leading-loose">Personal Details</h4>
                        <div class="w-full flex-col justify-start items-start gap-8 flex">
                            <div class="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                                <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label for="" class="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Full Name
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                        </svg>
                                    </label>
                                    <input type="text" class="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="John"/>
                                </div>
                                
                            </div>
                            <div class="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                                
                                <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label for="" class="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Email
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                        </svg>
                                    </label>
                                    <input type="text" class="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Johnsmith@gmail.com"/>
                                </div>
                            </div>
                            <div class="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                                <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label for="" class="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Password
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                        </svg>
                                    </label>
                                    <input type="password" class="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"  />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full flex-col justify-start items-start gap-2.5 flex">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 ">
                            <div class="mb-3 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g id="Upload 02">
                                        <path id="icon" d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-center text-gray-400 text-xs font-normal leading-4 mb-1">PNG, JPG or PDF, smaller than 15MB</span>
                            <h6 class="text-center text-gray-900 text-sm font-medium leading-5">Drag and Drop your file here or</h6>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                    <button class="mx-auto sm:w-fit w-full px-9 py-3 bg-blue-500 hover:bg-blue-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex">
                        <span class="px-3.5 text-center text-white text-lg font-semibold leading-8">Update</span>
                    </button>
                </div>
            </div>
         </section>
                                                                                    
    </>                                 
  )
}
