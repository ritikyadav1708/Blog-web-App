//Centralized Data of Context without any prop drilling or lifting
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//Step 1 [Context-Creation]
export  const AppContext=createContext()
// Done

// Provider Create and Wrap to the React Application where child Components access the context values and shared the data
//Done

export function AppContextProvider({children}){
   const[loading,setLoading]=useState(false)
   const[posts,setPosts]=useState([])
   const [page,setPage]=useState(1)
   const [totalPages,setTotalPages]=useState(null)
   async function fetchBlogs(page){
    const url=`${baseUrl}?page=${page}`
    try {
          setLoading(true)
          const fetchData=await fetch(url)
          const data= await fetchData.json()
          console.log(data)
          console.log("hello network call")
          setPosts(data.posts)
          setPage(data.page)
          setTotalPages(data.totalPages)



    }
    catch(error){

        console.log("error while fetching data")
        setPage(1)
        setPosts([])
        setTotalPages(null)
    }
    setLoading(false)
   }


   const value={
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogs,
    handleChangePage
    };
    function handleChangePage(page){
        setPage(page)
        fetchBlogs(page)
    }
  
//Step-2 [Provider-Apply]
   return (<AppContext.Provider value={value}>
      {children}
   </AppContext.Provider>
   )
}
// export default AppContextProvider;
