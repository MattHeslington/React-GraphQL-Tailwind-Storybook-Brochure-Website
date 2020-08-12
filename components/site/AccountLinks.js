import React from 'react';

import { Link } from "gatsby"

export default function AccountLinks() {
    return (
        <div className="z-50 hidden mt-5 sm:bg-white sm:rounded-lg sm:absolute sm:right-0 sm:w-48 sm:mt-3 sm:shadow-xl sm:py-2 sm:border-gray-300 sm:border">

            <Link className="block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500" to="/">Account settings</Link>
            <Link className="block mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500" to="/">Support</Link>
            <Link className="block mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500" to="/">Sign out</Link>
            
        </div>
    )
}