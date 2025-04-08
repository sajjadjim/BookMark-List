import './App.css'
import Navbar from './navbar/Navbar'
import Blogs from './Blogs Data/Blogs'
import { useState } from 'react'

function App() {

  const [bookMark , setBookMark] = useState([])
  const handleBookmark = (blog) =>{
    setBookMark([...bookMark , blog])
  }

  const [readTime , setReadTime] = useState(0)
  const markAsRead = (time , id) =>{
    const newTime = readTime + time ;
    setReadTime(newTime)
    removeFromBookmark(id)
  }

  const removeFromBookmark= (id)=>{
const newBookMarked= bookMark.filter((bookM)=> bookM.id!== id)
setBookMark(newBookMarked) 
}

  return (
    <>
<Navbar></Navbar>
<div className='main-container md:flex justify-items-center md:mx-10 mt-10'>
<div className='right-container md:w-[70%] w-auto'>
<Blogs handleBookmark={handleBookmark}
markAsRead={markAsRead}
></Blogs>

</div>
<div className='left-container md:w-[30%] w-auto md:mt-0 m-5'>
  <h1 className='text-xl'>Reading Time :{readTime}</h1>
  <h1 className='text-xl'>Total Bookmark Count :{bookMark.length}</h1>
  {
    bookMark.map((book,index)=><div key={index} className='my-5 border-2 p-5 rounded-xl'>
      <p>{book.id}</p>
      <p>{book.author}</p>
      <p>{book.title}</p>
    </div>
  )
  }
</div>
</div>
    </>
  )
}

export default App
