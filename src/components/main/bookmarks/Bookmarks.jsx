import Bookmark from "./Bookmark";
// import PropTypes from 'prop-types';
const Bookmarks = (handleBookmarks) => {
        console.log(handleBookmarks)
    return (
        <div className="w-1/3">
            <div className=" w-full py-5 border-2 text-center rounded-xl bg-[#6047EC1A] border-[#6047EC]">
                <h2 className="text-[#6047EC] text-2xl font-bold">Spent time on read : <span>177</span> min</h2>
            </div>
            <div className="p-8 bg-[#1111110D] rounded-xl mt-10">
                <h2 className="text-[#111111] text-2xl font-bold">Bookmarked Blogs : 0</h2>
                <div className="pt-8 space-y-5">
                    {
                       handleBookmarks.map
                    }
                </div>
            </div>
        </div>
    );
};

Bookmark.propTypes={

}

export default Bookmarks;