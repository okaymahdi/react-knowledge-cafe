import PropTypes from 'prop-types'
import { CiBookmark } from 'react-icons/ci'

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_times,
    hashtags,
  } = blog
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full rounded-lg mb-4"
        src={cover}
        alt={`cover picture of the ${title}`}
      />

      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-4">
            <h2 className="text-[#111] text-2xl font-bold">{author}</h2>
            <p className="text-[#11111199] text-base font-semibold">
              {posted_date}
            </p>
          </div>
        </div>

        <div className="flex items-center text-[#11111199] text-xl font-medium">
          <span>{reading_times} min read</span>
          <button className="ml-2" onClick={() => handleAddToBookmark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>

      <p>
        {hashtags.map((tag, idx) => (
          <span
            className="text-[#11111199] text-xl font-medium"
            key={idx}
          >{`${tag} `}</span>
        ))}
      </p>
      <button
        className="text-[#6047EC] text-xl font-semibold underline"
        onClick={() => handleMarkAsRead(reading_times)}
      >
        Mark as read
      </button>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog
