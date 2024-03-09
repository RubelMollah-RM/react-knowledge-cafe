import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookMark = blog => {
    setBookmarks([...bookmarks, blog])
  };

  const handelMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddToBookMark={handelAddToBookMark} handelMarkAsRead={handelMarkAsRead} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  )
}

export default App
