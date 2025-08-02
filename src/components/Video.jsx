import vid from '../assets/imgs/vid.mp4'

const Video = () => {
  return (
    <div>
    <div className='relative w-full h-[400px]'>
        <video src={vid} className='absolute z-0 w-full h-full object-cover' 
        autoPlay
        loop
        muted
        playsInline
        ></video>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center'>
        <p className='text-2xl font-bold'>HANDCRAFTED <br /> WITH PASSION </p>
        <p>100% HANDMADE, MAKE EVERY <br /> PIECE TO BE ONE OF A KIND</p>
        </div>
    </div>

    <div className='grid grid-cols-2 mt-18 gap-10 px-12'>
        <div>
            <div className='grid grid-rows-5'>
                <div className='font-md font-semibold border-b-1 border-gray-200 p-2'>LEARN MORE</div>
                <div className='p-1 text-gray-700'>SHOP</div>
                <div className='p-1 text-gray-700'>ABOUT</div>
                <div className='p-1 text-gray-700'>SHIPPING & RETURNS</div>
                <div className='p-1 text-gray-700'>CONTACT</div>
                <div className='p-1 text-gray-500 text-sm font-semibold py-10'>Prestige @2025</div>
            </div>
        </div>
        
        <div>
            <div className='font-md font-semibold border-b-1 border-gray-200 p-2'>FOLLOW</div>
            <div className='p-2 text-gray-700'>FACEBOOK</div>
            <div className='p-2 text-gray-700'>INSTAGRAM</div>
        </div>
    </div>


    </div>
  )
}

export default Video