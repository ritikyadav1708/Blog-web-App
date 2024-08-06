import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../AppContext/AppContext'




const Blogs = () => {
  //Consume 
  const {loading,posts}=useContext(AppContext)
  return (
  <div className='flex  flex-col  max-w-[650px] w-11/12 gap-y-4   justify-center mt-[6.5rem] items-center  h-screen '>
   {loading?(<Spinner/>):(posts.map((post)=>(
    <div key={post.id} className='flex flex-col p-2' >
      <p className='text-base font-bold'>{post.title}</p>
      <p className='text-xs italic  '>by <span className='italic text-blue-700 font-bold'>{post.author} </span> for <span className='font-bold'>{post.category}</span></p>
      <p className='text-xs italic'>Posted on: <span className='font-semibold'>{post.date}</span></p>
      <p className='text-[12px] my-2'>{post.content}</p>
      <div className='flex gap-x-3'>
         {
        post.tags.map((tag,index)=>(
        <span key={index} className='text-[10px] text-blue-700 font-semibold underline'>{`#${tag}`}</span>
        ))
      }

      </div>

     

    </div>
   )) )
  }
    </div>
  )
}

export default Blogs