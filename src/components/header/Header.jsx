import Usear from '../../assets/profile.png'
const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center border-b-2 py-5">
        <h2 className='text-[#111111] font-bold text-4xl'>Knowledge Cafe</h2>
        <img src={Usear} alt="" />
    </header>
  );
};

export default Header;