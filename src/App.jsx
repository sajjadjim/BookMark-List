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
<div className='main-container md:flex text-center md:mx-10 mt-10'>
<div className='right-container w-[70%]'>
<Blogs handleBookmark={handleBookmark}
markAsRead={markAsRead}
></Blogs>

</div>
<div className='left-container w-[30%]'>
  <h1>Reading Time :{readTime}</h1>
  <h1>Total Bookmark Count :{bookMark.length}</h1>
  {
    bookMark.map((book,index)=><div key={index} className='my-5 border-2 p-5'>
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
