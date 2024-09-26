import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 text-center">
      <div className="bg-[#6047EC1A] border border-[#6047EC] py-5 px-12 rounded-lg mb-8">
        <h2 className="text-[#6047EC] text-xl font-bold">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className="bg-[#1111110D] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
}

export default Bookmarks
