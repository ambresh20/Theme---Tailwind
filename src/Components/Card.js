import React from 'react'

export default function Card() {
    return (

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

