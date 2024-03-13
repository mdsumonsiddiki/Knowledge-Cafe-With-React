import { useState } from "react";
import Blogs from "./blogs/Blogs";
import Bookmarks from "./bookmarks/Bookmarks";

function Main() {
  const [handleBookmarks, sethandleBK] = useState([]);

  const handleBookmark = (title)=>{
    sethandleBK(title);
  }
  return (
    <main className="container mx-auto flex pt-8 gap-10">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks handleBookmarks={handleBookmarks}></Bookmarks>
    </main>
  )
}

export default Main;