import React from 'react';
import { Link } from "gatsby"

export default function NavigationLinks() {
    return (
        <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
            <Link to="/" className="block px-3 py-1 leading-tight rounded sm:text-sm sm:px-2 text-uvBlack hover:text-uvPink">List your villa</Link>
            <Link to="/" className="block px-3 py-1 leading-tight rounded sm:text-sm sm:px-2 sm:ml-2 text-uvBlack hover:text-uvPink">Destinations</Link>
            <Link to="/" className="block px-3 py-1 leading-tight rounded sm:text-sm sm:px-2 sm:ml-2 text-uvBlack hover:text-uvPink">Account</Link>
        </div>
    )
}
