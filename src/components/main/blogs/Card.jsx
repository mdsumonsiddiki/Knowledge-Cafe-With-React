import Banner from '../../../assets/1.jpg';
import Author from '../../../assets/profile.png';
import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Card = ({ blog, handleBookmark }) => {
    const { title, post_date, reading_time, author_name, hashtag } = blog;
    return (
        <div>
            <img src={Banner} alt="" />
            <div className='py-8 px-5 border-2 rounded-b-xl'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-5 pb-5'>
                        <div>
                            <img src={Author} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-[#111111] text-2xl font-bold'>{author_name}</h2>
                            <h3 className='text-[#111111] font-semibold text-base'>{post_date}</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h2 className='text-[#111111] text-xl font-medium'>{reading_time} min read</h2>
                        <button onClick={() => handleBookmark(title)} className='text-4xl'><FaRegBookmark /></button>
                    </div>
                </div>
                <h2 className='text-[#111111] font-bold text-4xl pb-4'>{title}</h2>
                <p className='space-x-3 pb-3'>
                        {
                            hashtag.map((hash, idx) =>  <span key={idx}><a href="#">#{hash}</a></span>)
                        }
                    </p>
                <button className='text-[#6047EC] text-xl font-semibold underline'>Mark as read</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
}

export default Card;