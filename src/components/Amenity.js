import React from 'react'
import Image from 'next/image'

const Amenity = (props) => {
    return (
        <a href={props.to}>
            <div className='min-w-[100px] flex flex-col justify-center items-center opacity-60 hover:opacity-100 cursor-pointer border-b-2 border-transparent hover:border-gray-900 py-3'>
                <Image
                    src={props.icon}
                    alt="Picture of the author"
                    width={24}
                    height={24}
                    quality={100}
                />
                <div className='text-[14px] mt-1 font-semibold'>{props.title}</div>
            </div>
        </a>
    )
}

export default Amenity