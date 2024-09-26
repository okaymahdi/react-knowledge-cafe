import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark // Destructuring

  return (
    <div className=" bg-white p-5 rounded-lg mb-4">
      <h2 className="text-[#111] text-lg font-semibold">{title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default Bookmark
