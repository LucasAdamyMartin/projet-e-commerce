import { Bars3Icon } from '@heroicons/react/24/solid';
import { Button } from './components/Button';
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const text = "Sign In";
  const text2 = "Sign Out";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
  <div>
    <div className="h-8.5 w-screen bg-gray-100"></div>
    <div className="flex h-32 w-screen">
      <div className="flex justify-center items-center w-full h-full">
        <nav className="flex justify-between items-center h-fit w-full m-15  space-x-8">
          <h1 className="font-pacifico text-[40px]">vantela</h1>
          <ul className='hidden lg:flex space-x-12 justify-center flex-grow ml-15'>
            <li>Home</li>
            <li>Sneakers</li>
            <li>Slip On</li>
            <li>Sandals</li>
            <li>Others</li>
          </ul>
          <div className='flex space-x-2 col-span-1'>
            <ChatBubbleOvalLeftEllipsisIcon className='size-7 text-primary'></ChatBubbleOvalLeftEllipsisIcon>
            <HeartIcon className='size-7 text-primary'></HeartIcon>
            <ShoppingBagIcon className="size-7 text-primary"></ShoppingBagIcon>
          </div>
          <div className='flex space-x-4 col-span-2'>
            <Button text={text} variant='outline'></Button>
            <Button text={text2} variant='inline'></Button>
          </div>
          <Bars3Icon
            className="hidden max-lg:block size-7 text-primary"
            onClick={handleMenu}
          ></Bars3Icon>
          {isMenuOpen && (
            <>
            <div className="fixed inset-0 bg-black/25"
                  onClick={handleMenu}>      
            </div>
            <div className="absolute top-0 right-0 w-1/4 h-screen bg-white backdrop-blur-sm">
              <ul className="flex flex-col space-y-4 mt-4">
                <li>Home</li>
                <li>Sneakers</li>
                <li>Slip On</li>
                <li>Sandals</li>
                <li>Others</li>
              </ul>
            </div>
            </>
          )}
        </nav>
      </div>
    </div>
  </div>
  )
}

export default App 