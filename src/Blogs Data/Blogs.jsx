import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
 const [blogs ,setBlogs] = useState([]) 

 useEffect(()=>{
    fetch('https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bookMark')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
 } , [])  
 console.log(blogs) 
    return (
        <div>
            <h1>Total Blogs : {blogs.length}</h1>
        <div className="AllBlogs grid md:grid-cols-2 grid-cols-1 gap-5">
     {
        blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
     }
        </div>
        </div>
    );
};

export default Blogs;