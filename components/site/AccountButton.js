import React from 'react';
import AccountLinks from 'components/site/AccountLinks'

export default function AccountButton() {
    return (
        <div className="relative px-5 py-5 sm:py-0 sm:px-0 sm:ml-4">
            <div className="flex items-center sm:hidden">
                <img 
                    className="object-cover w-10 h-10 border-2 border-gray-600 rounded-full" 
                    src="/ME-2016.jpg" 
                    alt="Me"
                />
                <span className="ml-4 font-semibold text-gray-200 sm:hidden">Matt Heslington</span>
            </div>
            <button  type="button" className="hidden sm:block">
                <img className="object-cover w-10 h-10 border-2 border-gray-600 rounded-full xl:border-gray-300" src="/ME-2016.jpg" alt="Me" />
            </button>
            
            <AccountLinks/>

        </div>
    )
}
