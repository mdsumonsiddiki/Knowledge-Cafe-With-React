import { ImCross } from "react-icons/im";
import PropType from 'prop-types'

const Bookmark = ({book, removeBookmark,}) => {
    const {title} = book;
    return (
        <div className="flex items-center justify-between gap-5 bg-white p-4 rounded-xl">
            <h2 className="text-lg text-[#111111] font-semibold">{title}</h2>
            <button onClick={()=>removeBookmark(book.id)}><ImCross /></button>
        </div>
    );
};
Bookmark.propTypes={
    book: PropType.object.isRequired,
    removeBookmark: PropType.func.isRequired,
}
export default Bookmark;