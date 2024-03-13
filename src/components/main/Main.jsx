import { useState } from "react";
import Blogs from "./blogs/Blogs";
import Bookmarks from "./bookmarks/Bookmarks";

function Main() {
  const [handleBookmarks, sethandleBK] = useState([]);
  const [readTime, setReadtime] = useState(0)

  const handleBookmark = (blog)=>{
    const setNew = [...handleBookmarks, blog]
    sethandleBK(setNew);
  }
  const removeBookmark = (id)=>{
    const newBookmarks = handleBookmarks.filter(bookMark => bookMark.id !== id);
    sethandleBK(newBookmarks);
  }
  const markRead = (id,reading_time)=>{
   const newMarksRead = handleBookmarks.filter(read => read.id !== id);
   sethandleBK(newMarksRead);
   const newTime = parseInt(readTime) + parseInt(reading_time);
   setReadtime(newTime);
  }
  return (
    <main className="container mx-auto flex pt-8 gap-10">
        <Blogs 
        markRead={markRead}
        handleBookmark={handleBookmark}
        ></Blogs>
        <Bookmarks 
        handleBookmarks={handleBookmarks} 
        removeBookmark={removeBookmark}
        readTime={readTime}
        ></Bookmarks>
    </main>
  )
}

export default Main;