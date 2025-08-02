import React, { useState } from 'react'



const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='flex justify-between items-center px-4 py-4 bg-gray-50 pl-16 pr-16'>
        <div className='flex gap-4'>
            <button className='text-xl'>HOME</button>
            <button className='text-xl'>SHOP</button>
        </div>

        <div>
            <div className='text-center playwrite-hu text-xl'>Prestige</div>
            <div className='font-extralight font-sans text-sm mt-1'>SCULPTED JWELLS</div>
        </div>

        <button onClick={() => {
                setOpen(!open)
        }} className='flex gap-4'>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </button>

        {open && (
            <div>
                <div>
                    <a>Home</a>
                    <a>Shop</a>
                    <a>About</a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Header