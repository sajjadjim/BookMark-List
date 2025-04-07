import './App.css'
import Navbar from './navbar/Navbar'
import Blogs from './Blogs Data/Blogs'

function App() {


  return (
    <>
<Navbar></Navbar>
<div className='main-container md:flex text-center md:mx-10'>
<div className='right-container w-[70%]'>
<Blogs></Blogs>

</div>
<div className='left-container w-[30%]'>
  Left File
</div>
</div>
    </>
  )
}

export default App
