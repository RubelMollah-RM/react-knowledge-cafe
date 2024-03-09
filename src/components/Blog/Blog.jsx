import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover, author, author_img,posted_date, reading_time, hashtag } = blog;
    return (
        <div className='mt-4 mb-20 p-5'>
            <img className='w-full' src={cover} alt={`Cover picture of the title : &{title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center '>
                    <img className='w-12 rounded-full m-4' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} : min read</span>
                    <button className='text-red-500 text-xl ml-2'><FaBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl mb-6'>{title}</h3>
            <p>
                {
                    hashtag.map((hash, idx) => <span className='text-green-600 mx-2' key={idx}> <a href="">{hash}</a></span>)
                }
            </p>
            <button className='underline text-purple-600 mt-4'><a href="#">Mark as read</a></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;