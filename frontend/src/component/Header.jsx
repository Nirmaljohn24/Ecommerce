import React, { useState } from 'react';
import { TbShoppingCartHeart } from "react-icons/tb";
import { CiLight } from "react-icons/ci";  // Light mode icon
import { MdDarkMode } from "react-icons/md";  // Dark mode icon
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {

    const {cartItem} = useSelector((state) => state.cart);

    console.log(cartItem);
    const [darkMode, setDarkMode] = useState(false);  // Track dark mode state

    const toggleTheme = () => {
        const html = document.querySelector('html');  // Get the root HTML element

        // Toggle between light and dark mode
        if (darkMode) {
            html.classList.remove('dark');   // Remove dark mode class
            document.documentElement.setAttribute('data-theme', 'light');  // Set light theme in data-theme attribute
        } else {
            html.classList.add('dark');   // Add dark mode class
            document.documentElement.setAttribute('data-theme', 'dark');  // Set dark theme in data-theme attribute
        }

        setDarkMode(!darkMode);  // Update state to reflect the change
    };

    return (
        <div className="navbar bg-cyan-300 dark:bg-gray-800 transition-colors duration-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white hover:text-cyan-950 dark:hover:text-gray-200">
                    E-COM
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <label className="input input-bordered flex items-center gap-2 h-8 my-1 bg-transparent">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <li>
                        <Link  to ="/cart" className='flex gap-1'>
                            Cart <TbShoppingCartHeart /> <span className='text-cyan-600  '>{cartItem.length > 0 ? cartItem.length : null} </span>
                        </Link>
                    </li>
                    <li>
                        <details>
                            <summary>Nirmal John</summary>
                            <ul className="bg-base-100 dark:bg-gray-700 rounded-t-none p-2">
                                <li><a>Profile</a></li>
                                <li>
                                    <a onClick={toggleTheme} className="cursor-pointer flex items-center">
                                        {darkMode ? (
                                            <>
                                                Light <CiLight className="mr-2" />
                                            </>
                                        ) : (
                                            <>
                                                Dark <MdDarkMode className="mr-2" />
                                            </>
                                        )}
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

