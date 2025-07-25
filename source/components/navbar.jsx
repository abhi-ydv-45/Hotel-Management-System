import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
                isScrolled
                    ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                    : "bg-transparent text-white py-4 md:py-6"
            }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 ${
                            isScrolled ? "text-gray-700" : "text-white"
                        }`}
                    >
                        {link.name}
                        <div
                            className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                        />
                    </Link>
                ))}
                <button
                    className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${
                        isScrolled ? "border-gray-700 text-gray-800" : "border-white text-white"
                    }`}
                >
                    List Your Hotel
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <svg
                    className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="manageAccount" />
                            <UserButton.Link
                                label="My Bookings"
                                href="/my-bookings"
                                labelIcon={
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="14" height="12" rx="2" />
                                        <path d="M16 2v4M8 2v4M3 10h14" />
                                    </svg>
                                }
                            />
                            <UserButton.Action label="signOut" />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-6 w-6 cursor-pointer ${isScrolled ? "text-gray-700" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all border-gray-700 text-gray-800">
                    List Your Hotel
                </button>

                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="manageAccount" />
                            <UserButton.Link
                                label="My Bookings"
                                href="/my-bookings"
                                labelIcon={
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="14" height="12" rx="2" />
                                        <path d="M16 2v4M8 2v4M3 10h14" />
                                    </svg>
                                }
                            />
                            <UserButton.Action label="signOut" />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar; 