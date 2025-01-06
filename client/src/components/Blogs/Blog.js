import React from 'react'
import { Data } from './Data';
import { useParams} from 'react-router-dom'

export default function BlogDetail() {
  const {id} = useParams();
  const blog = Data.find((p)=>p.id===parseInt(id));
  
  return (
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div class="max-w-2xl">
    <div class="flex justify-between items-center mb-6">
      <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div class="shrink-0">
          <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
        </div>

        <div class="grow">
          <div class="flex justify-between items-center gap-x-2">
            <div>
              <div class="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                
                  <span class="font-semibold text-gray-800 dark:text-neutral-200">
                    {blog.author}
                  </span>
                
              </div>
            
              <ul class="text-xs text-gray-500 dark:text-neutral-500">
                <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  Jan 18
                </li>
                <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  8 min read
                </li>
              </ul>
            </div>  
          </div>
        </div>
        
        <div class="flex justify-around items-center py-3 ">
          <div class="flex gap-2 mx-3 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <svg class="w-6 stroke-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <button class="font-semibold text-sm text-green-700">Edit</button>
          </div>
          <div class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
            <svg class="w-6 stroke-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            <button class="font-semibold text-sm text-red-700">Delete</button>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="space-y-5 md:space-y-8">
      <div class="space-y-3">
        <p class="text-lg text-green-400 ">{blog.category}</p>
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">{blog.title}</h2>

        
      </div>

      <p class="text-lg text-gray-800 dark:text-neutral-200">{blog.description}</p>

      <figure>
        <img class="w-full object-cover rounded-xl" src={`${blog.image}`} alt="Blog Image" />
        <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
          A woman sitting at a table.
        </figcaption>
      </figure>
    </div>
    </div>
    </div>
  )
}
