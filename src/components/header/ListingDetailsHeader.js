import React from 'react'
import Link from 'next/link'

const ListingDetailsHeader = ({ listing, isMobile = false, onShare }) => {
    return (
        <div className='stick top-0 my-5'>
            {!isMobile && <h1 className='text-3xl font-bold mb-1'>{listing?.name}</h1>}
            <div className='flex items-center justify-between flex-wrap'>
                {isMobile ? (
                    <Link href={'/'} className='flex items-center gap-2 hover:bg-gray-100 rounded-md'>
                        <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                        </svg><span>Home</span>
                    </Link>
                ) : (
                    <div className='flex items-center'>
                        <div className='flex items-center gap-1 font-semibold'>
                            <svg className="w-3 h-3 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span>{(listing?.rating % 5).toFixed(1)}</span>
                        </div>
                        <div className='mx-3 w-1 h-1 bg-black rounded-full'></div>
                        <div className="underline font-semibold">{listing?.reviews} reviews</div>
                        <div className='mx-3 mt-1 w-1 h-1 bg-gray-400 rounded-full'></div>
                        <div className=" font-semibold underline"><Link href={``}>{listing?.location}</Link></div>
                    </div>
                )}

                <div className={`flex items-center gap-6 ${isMobile ? '' : 'sm:hidden'}`}>
                    <button onClick={onShare} className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md'>
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12V1m0 0L4 5m4-4 4 4m3 5v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                        </svg><span className='underline sm:hidden'>Share</span>
                    </button>
                    <button className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md'>
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                        </svg><span className='underline sm:hidden'>Save</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListingDetailsHeader