import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <div className='p-3 bg-gray-600 text-white border-b-2'>{title}</div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark