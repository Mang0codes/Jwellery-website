import React from 'react'
import img5 from '../assets/imgs/jwell5.jpg'
import img6 from '../assets/imgs/jwell6.jpg'
import img1 from '../assets/imgs/jwell7.jpg'
import img2 from '../assets/imgs/jwellery1.png'
// import img3 from '../assets/imgs/jwell4.jpg'
import bg1 from '../assets/imgs/bg1.webp'
import img8 from '../assets/imgs/jwell8.jpg'
import img9 from '../assets/imgs/jwell9.jpg'
import jwell2 from '../assets/imgs/jwell2.avif'
import jwell10 from '../assets/imgs/jwell10.jpg'
import jwell11 from '../assets/imgs/jwell11.jpg'



const Hero = () => {
  return (
    <div>
        <div className='h-[90vh] overflow-hidden'>
            <img src={img2} alt="JWELLERY 1" className='w-full h-full object-cover'></img>
        </div>
        <div className='text-3xl font-extralight playwrite-hu hero text-center'>
          <div className='text-center'>♥</div>
          Our brand promotes what we <br />call chic simplicity, through <br/>comfortable, body-loving <br/> designs, that fit all and will <br/> grace your get-up in every hour <br /> of the day. 
        </div>

        <div className=''>
                  {/* First Row */}
        <div className="space-y-0 mt-4 border-b-1 border-t-1 border-black">
  {/* Row 1 */}
  <div className='flex w-full h-[450px] '>
    <div className='flex items-center justify-center w-1/2 bg-white text-center p-4'>
      <div>
        <p className='text-4xl'>HANDCRAFTED <br /> WITH PASSION</p>
        <p className='text-gray-400 text-sm font-semibold p-4 pb-6 hero'>100% handmade, make every <br/> piece to be one of a kind</p>
        <button className='border-2 border-b-black h-12 w-[200px] font-semibold hover:bg-black hover:text-white hover:transition-all duration-300 hover:border-black'>Grace Collection</button>
      </div>
    </div>
    <img src={img1} className='w-1/2 h-full object-cover'></img>
  </div>

  {/* Row 2 */}
  <div className="flex w-full h-[450px]">
    <img src={img5} className="w-1/2 h-full object-cover" />
    <div className="w-1/2 bg-white flex items-center justify-center p-4 text-center">
      <div>
        <p className="text-4xl">HARMONICA <br /> RING</p>
        <p className="text-gray-400 text-sm font-semibold p-4 pb-6 hero">Geometrical harmonica collection. <br /> Nostalgic vintage art-deco vibes.</p>
        <button className="border-2 border-b-black h-12 w-[200px] font-semibold hover:bg-black hover:text-white hover:transition-all duration-300 hover:border-black">Shop Now </button>
      </div>
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex w-full h-[450px]">
    <div className="w-1/2 bg-white flex items-center justify-center p-4 text-center">
      <div>
        <p className='text-gray-400 text-sm font-semibold mb-2 hero'> - BEST SELLER -</p>
        <p className="text-4xl">LUCA <br /> HOOPS</p>
        <p className="text-gray-400 text-sm font-semibol dp-4 pb-6 hero">100% handmade, make every <br /> textured twist.</p>
        <button className="border-2 border-b-black h-12 w-[200px] font-semibold hover:bg-black hover:text-white hover:transition-all duration-300 hover:border-black">Grace collection</button>
      </div>
    </div>
    <img src={img6} className="w-1/2 h-full object-cover" />
  </div>
</div>
        </div>

        <div className='h-[74px]'></div>

        <div className='relative w-full h-screen overflow-hidden'>
          <img src={bg1} alt='Background' 
          className='absolute top-0 left-0 w-full h-full object-cover z-0'></img>

          <div className='relative z-10 flex-col text-center justify-center items-center h-full gap-16'>
            <p className='z-10 text-4xl playwrite-hu hero p-12'>From <b>Day</b> to <b>Night</b></p>
            <div className='flex gap-16 justify-center items-center'>
              <div>
                <div>
                  <img src={jwell10} alt='img8' 
                  className='w-96 h-[296px] object-cover shadow-lg rounded mb-12'></img>
                </div>
                <div>
                  <p className='text-3xl playwrite-hu'>Sahar</p>
                  <p className='text-sm playwrite-hu'>$460.00</p>
                </div>
              </div>
            
            <div>
              <div>
                <img src={jwell2} alt='img8' 
                className='w-96 h-[296px] object-cover shadow-lg rounded mb-12'></img>
              </div>
              <div>
                <p className='text-3xl playwrite-hu'>Woosh</p>
                <p className='text-sm playwrite-hu'>$500.00</p>
              </div>
            </div>

            </div>
            
            <button className="t-14 border-2 border-b-black h-12 w-[200px] font-semibold hover:bg-black hover:text-white hover:transition-all duration-300 hover:border-black">Explore collection </button>
          </div>

        </div>
{/* Marcella collection */}

        <div>
          <div className='h-[96px] hero text-center pt-24 pb-12 text-3xl'>Marcella Collection</div>
            <div className='grid grid-cols-4 w-full border-1 border-gray-50'>
              <div className='border-1 border-gray-200'>
                <img src={img9} className='h-64'></img>
                <div className='text-center hero text-xl font-semibold p-4'>
                  <p>Stare</p>
                  <p className='text-gray-400 text-sm'>$420.00</p>
                </div>
              </div>
              <div className='border-1 border-gray-200'>
                <img src={img5} className='h-64'></img>
                <div className='text-center hero text-xl font-semibold p-4'>
                  <p>Stare</p>
                  <p className='text-gray-400 text-sm'>$420.00</p>
                </div>
              </div>
              <div className='border-1 border-gray-200'>
                <img src={jwell10} className='h-64'></img>
                <div className='text-center hero text-xl font-semibold p-4'>
                  <p>Stare</p>
                  <p className='text-gray-400 text-sm'>$420.00</p>
                </div>
              </div>
              <div className='border-1 border-gray-200'>
                <img src={jwell11} className='h-64'></img>
                <div className='text-center hero text-xl font-semibold p-4'>
                  <p>Stare</p>
                  <p className='text-gray-400 text-sm'>$420.00</p>
                </div>
              </div>
            </div>
        </div>
        <div className='flex justify-center p-4'>
          <button className=" border-2 border-b-black h-12 w-[200px]
           font-semibold hover:bg-black hover:text-white hover:transition-all duration-300 hover:border-black">Explore collection </button>
        </div>

    </div>
  )
}

export default Hero