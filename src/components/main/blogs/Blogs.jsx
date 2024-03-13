import { useEffect, useState } from "react";
import Card from "./Card";
import PropType from 'prop-types'

const Blogs = ({handleBookmark, markRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="w-2/3 space-y-10">
            {
                blogs.map(blog => <Card
                    key={blog.id} 
                    blog={blog}
                    handleBookmark={handleBookmark}
                    markRead={markRead}
                ></Card>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmark: PropType.func.isRequired,
    markRead: PropType.func.isRequired,
}
export default Blogs;