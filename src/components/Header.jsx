import React, { useState } from 'react'



const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='relative w-full'>
        <div className='flex justify-between items-center px-4 py-4 bg-gray-50 pl-16 pr-16'>
        <div className='flex gap-4'>
            <button className='text-xl'>HOME</button>
            <button className='text-xl'>SHOP</button>
        </div>

        <div>
            <div className='text-center playwrite-hu text-xl'>Prestige</div>
            <div className='font-extralight font-sans text-sm mt-1'>SCULPTED JWELLS</div>
        </div>

        <div className='flex gap-4'>
            
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>

            <div>
                <button onClick={() => {
                setOpen(!open)
        }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>

        {open && (
                <div className=' font-semibold absolute top-16 right-0 w-40 bg-white shadow-lg shadow-amber-300 rounded-lg z-50 py-2 mt-4'>

                    <div className='flex items-center gap-2 border-b border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 text-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <a href='#' >
                        Home</a>
                    </div>

                    <div className='flex items-center gap-2 border-b border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 text-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <a href='#' >
                        Shop</a>
                    </div>

                    <div className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 text-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                        <a href='#' >
                        About</a>
                    </div>
                </div>
        )}
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Header