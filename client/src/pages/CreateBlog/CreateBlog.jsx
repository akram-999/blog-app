import React from 'react'

export default function CreateBlog() {
  return (
    <section className=" sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div >
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Create Blog</p>
                    <form className="max-w-lg mx-auto p-10">
                        
                    <label className='my-2'>Title</label>
                    <input type="text" class="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="John"/>
                    
                    <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                    <div class="w-full flex-col justify-start items-start gap-2.5 flex">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 ">
                            <div class="mb-3 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g id="Upload 02">
                                        <path id="icon" d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-center text-gray-400 text-xs font-normal leading-4 mb-1">PNG, JPG </span>
                            <h6 class="text-center text-gray-900 text-sm font-medium leading-5">Drag and Drop your file here or</h6>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>


                    <label for="message" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 outline-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    
                    <button className="inline-flex items-center px-6 py-4  font-semibold text-white transition-all duration-200 bg-gradient-to-tr from-green-600  to-green-300  rounded-full mt-3" role="button">
                        create
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    </form>
                    

            </div>

            <div>
                    <img className="w-full h-96 rounded-lg" src="https://img.freepik.com/free-photo/woman-coming-up-with-new-ideas-blog_23-2148775964.jpg?t=st=1736947987~exp=1736951587~hmac=7a54f912256cb0c9c4f31a4ab1360bb8aff36677bc71318f0a2ba2a459dee278&w=1060" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
