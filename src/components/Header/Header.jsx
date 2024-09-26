import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b-2 ">
      <h1 className="text-[#111111] text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt={`image for ${profile}`} />
    </header>
  )
}

export default Header
