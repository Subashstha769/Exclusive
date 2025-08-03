import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ navLinks }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="border-b-[2px] pb-1 border-gray-200 border w-screen  lg:py-4 lg:px-2">
            <nav className="relative flex justify-between items-center">
                {/* Left navigation bar with logo and links */}
                <div className="flex justify-between items-center gap-[200px]">
                    <h1 className="logo font-bold text-xl md:text-2xl ">Exclusive</h1>

                    <ul className="hidden lg:flex justify-between items-center  gap-[47px]">
                        {navLinks.map(navLinks => <li key={navLinks.id}><Link to={navLinks.path} className="font-sans lg:text-[16px] lg:font-light lg:focus:underline">{navLinks.name}</Link></li>)}
                    </ul>
                </div>
                
                {/* right navigation bar with search and icons */}
                <div className="flex justify-between items-center gap-4">
                    <form className="hidden bg-gray-100 rounded-[5px] w-[260px] px-3 py-1 md:flex justify-between items-center lg:py-2 lg:rounded-[6px] ">
                        <input type="text" className="outline-none bg-transparent w-[200px] p-[2px] text-sm lg:text-lg xl:text-xl 2xl:text-2xl placeholder:text-[15px] " placeholder="What are you looking for?" />
                        <i class="fa-solid fa-magnifying-glass text-2xl"></i>

                    </form>

                    <section className="icon hidden  lg:flex justify-between items-center gap-4">
                        <i class="fa-solid fa-heart text-2xl hover:cursor-pointer"></i>
                        <i class="fa-solid fa-cart-shopping text-2xl hover:cursor-pointer"></i>
                    </section>
                </div>

                {/* Menu Toggle Button */}
                <div className=" w-[40px] h-[40px] flex items-center justify-center lg:hidden" onClick={handleMenu}>
                    {isMenuOpen ? <i class="fa-solid fa-xmark text-2xl"></i> : <i class="fa-solid fa-bars text-2xl"></i>}
                </div>

                {/* Navbar for Mobile */}
                <ul className={`bg-gray-100 absolute top-[42px] w-screen ${isMenuOpen ? "opacity-100" : "opacity-0"} `} >
                    {navLinks.map(navLinks => <li key={navLinks.id} className="w-full h-[40px] flex items-center justify-center hover:bg-gray-300 hover:text-white hover:shadow-lg lg:hidden"><Link to={navLinks.path} className="text-[16px] md:text-lg">{navLinks.name}</Link></li>)}
                </ul>
            </nav>

        </header>
    );
}
export default Header;