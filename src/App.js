import React, { useContext, useEffect } from 'react'
import Header from "../src/components/Header"
import Blogs from  "../src/components/Blogs"
import Pagination from "../src/components/Pagination"
import { AppContext } from './AppContext/AppContext'
import "./App.css"

const App = () => {
  const {fetchBlogs}=useContext(AppContext)
  useEffect(()=>(
    fetchBlogs()
  ),[])
  return (
    <div className='flex flex-col items-center justify-center '>

      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
