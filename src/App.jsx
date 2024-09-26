import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)

    // remove bookmark
    const remainingBookmarks = bookmarks.filter((blog) => blog.id !== id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <Header></Header>
        <div className="md:flex gap-6 mt-8">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
