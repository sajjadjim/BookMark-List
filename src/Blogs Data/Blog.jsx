import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog}) => {

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
        <FaBookmark size={20} />
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex font-semibold">
    {
        blog.hashtags.map((hash)=><p>{hash}</p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>       
        </div>
    );
};

export default Blog;