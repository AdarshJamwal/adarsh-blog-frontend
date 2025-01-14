import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const[searchParams, setSearchParams] = useSearchParams()

  const handleKeyPress = (e)=>{
    if(e.key === "Enter"){
      const query = e.target.value;
      if(location.pathname === "/posts"){
        setSearchParams({...Object.fromEntries(searchParams), search:query})
      }else{
        navigate(`/posts?search=${query}`)
      }
    }
  }
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <FiSearch />
        <input type="text" placeholder=' Search a post' onKeyDown={handleKeyPress}  />
    </div>
  )
}

export default Search