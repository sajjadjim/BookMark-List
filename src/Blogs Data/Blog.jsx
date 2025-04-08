import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog , handleBookmark , markAsRead}) => {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-between items-center">
        <div className="font-bold">{blog.author}</div>
        <div><img className="w-10" src={blog.author_img}></img></div>
        <button className="cursor-pointer" onClick={ ()=> handleBookmark(blog)}><FaBookmark size={20} /></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex font-semibold">
    {
        blog.hashtags.map((hash,index)=><p key={index}>{hash}</p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=> markAsRead(blog.reading_time , blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>       
        </div>
    );
};

export default Blog;