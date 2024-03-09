import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-slate-200 mt-8 rounded-md'>
            <h3>Spend Time on read : {readingTime}</h3>
            <h3 className='text-3xl underline'>Bookmarks :{bookmarks.length}</h3>
            <div className='bg-slate-200'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes
}

export default Bookmarks
