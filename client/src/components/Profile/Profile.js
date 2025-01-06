import React from 'react'

export default function Profile() {
  return (
    <div className='flex'>
    <main class="py-1 w-1/2">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Profile</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                    <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-green-300 dark:ring-orange-500"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Bordered avatar" />

                        <div class="flex flex-col space-y-5 sm:ml-8">
                            <input type="file" id='fileInput' style={{display:"none"}}/>
                            <label 
                                class="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-gradient-to-tr from-orange-600  to-orange-300 rounded-lg border  "
                                htmlFor="fileInput">
                                Change picture
                            </label>
                            <button type="button"
                                class="py-3.5 px-7 text-base font-medium text-orange-900 focus:outline-none bg-white rounded-lg border border-orange-200 hover:bg-orange-100  ">
                                Delete picture
                            </button>
                        </div>
                    </div>

                    <div class="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div class="w-full">
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">User
                                    name</label>
                                <input type="text" id="first_name"
                                    class="bg-orange-50 border border-orange-300  text-sm rounded-lg  block w-full p-2.5 "
                                    placeholder="Your first name" value="Jane" required />
                            </div>

                            

                        </div>

                        <div class="mb-2 sm:mb-6">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                email</label>
                            <input type="email" id="email"
                                class="bg-orange-50 border border-orange-300  text-sm rounded-lg  block w-full p-2.5 "
                                placeholder="your.email@mail.com" required />
                        </div>

                        <div class="mb-2 sm:mb-6">
                            <label for="profession"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                            <input type="Password" id="profession"
                                class="bg-orange-50 border border-orange-300  text-sm rounded-lg  block w-full p-2.5 "
                                placeholder="your profession" required />
                        </div>

                        <div class="flex justify-end">
                            <button type="submit"
                                class="text-white bg-gradient-to-tr from-green-600  to-green-300  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    <aside className='w-1/2 mt-11'>
        <img src='./svg2.svg' />
    </aside>
    </div>
  )
}
