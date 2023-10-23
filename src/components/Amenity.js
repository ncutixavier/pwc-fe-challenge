import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Amenity = (props) => {
    const router = useRouter()

    return (
        <button onClick={props.onSelect}>
            <div className={`min-w-[100px] flex flex-col justify-center items-center ${props.active ? 'opacity-100 border-gray-900 border-b-2' : 'opacity-60 border-transparent'} hover:opacity-100 cursor-pointer border-b-2 hover:border-gray-900 py-3`}>
                <Image
                    src={props.icon}
                    alt="Picture of the author"
                    width={24}
                    height={24}
                    quality={100}
                />
                <div className='text-[14px] mt-1 font-semibold'>{props.title}</div>
            </div>
        </button>
    )
}

export default Amenity