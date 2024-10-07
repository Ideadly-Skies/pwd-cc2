'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdSearch } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function Navbar() {
    const navigation = [
        "Products",
        "About Us",
        "Teams",
        "Services",
        "Support",
        "Company",
        "Salesforce+"
    ];

    return(
        <div className='w-full border-b border-gray-200 sticky top-0 left-0 z-50 bg-white'>
            <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-4">
                {/* Logo  */}
                <Link href="/" className='flex items-center mr-10'>
                    <Image
                        src="/img/salesforce-logo.png"
                        width="80"
                        height="80"
                        alt="Salesforce Logo"
                        className="w-15 h-15"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex lg:items-center">
                    <ul className="flex space-x-6 text-lg font-normal text-gray-800 dark:text-gray-200">
                        {navigation.map((menu, index) => (
                            <li key={index} className="nav__item">
                                <Link href={index <= 2 ? `/${menu.toLowerCase().replace(/\s+/g, '-')}` : '/'} className="hover:text-blue-600 transition-colors">
                                    {menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section with Icons and Button */}
                <div className="flex items-center space-x-4 lg:space-x-6 lg:ml-auto lg:order-2">
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Contact Us */}
                        <div className="text-center">
                            <Link href="/" className="text-sm font-semibold underline">Contact Us</Link>
                            <div className="text-sm">+65 6302 5700 (Intl)</div>
                        </div>

                        {/* Search Icon */}
                        <IoMdSearch className="text-2xl text-gray-700 cursor-pointer" />

                        {/* Globe Icon */}
                        <BsGlobe2 className="text-2xl text-gray-700 cursor-pointer" />

                        {/* Login Icon */}
                        <div className="flex items-center space-x-1 text-gray-700 cursor-pointer">
                            <FaUser className="text-xl" />
                            <span className="text-sm font-medium">Login</span>
                        </div>

                        {/* Try for Free Button */}
                        <Link href="/" className="px-4 py-2 text-white bg-green-700 rounded-md text-sm font-semibold hover:bg-green-800 transition-colors">
                            Try for Free
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;