import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'

const Pagination = () => {
  const {page,totalPages,handleChangePage}=useContext(AppContext)
  
  return (
    <div className='w-full border flex justify-center items-center p-2 mt-12'>
      <div className=' w-11/12 max-w-[550px] flex items-center justify-between'>
        <div className='flex gap-x-3'> 
          {page > 1 &&
          <button className='border py-1 px-4 bg-white rounded-md' onClick={()=>handleChangePage(page-1)}>Previous</button>
        }
        { page < totalPages &&
          <button className='border py-1 px-4 bg-white rounded-md' onClick={()=>handleChangePage(page+1)}>Next</button>
        }
        </div>
        <div>Page {page} of {totalPages}</div>
      
        </div>
    

      
    </div>
  )
}

export default Pagination;