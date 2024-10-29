const Banner: React.FC = () => {
    return (
      <div
        className='relative h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center'
        style={{ backgroundImage: "url('/banner.webp')" }}>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
    
        <div className='relative z-10'>
          <h1 className='text-white text-2xl md:text-4xl md:px-0 px-16 font-bold'>
            Finstar Avenue - Empowering Financial Success
          </h1>
        </div>
      </div>
    );
  };
  
  export default Banner;