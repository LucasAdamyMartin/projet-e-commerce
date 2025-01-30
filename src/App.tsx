import { Button } from './components/Button';
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

function App() {
  const text = "Sign In";
  const text2 = "Sign Out";
  return ( 
  <div>
    <div className="h-8.5 w-screen bg-gray-100"></div>
    <div className="flex h-32 w-screen">
      <div className="flex justify-center items-center w-full h-full">
        <nav className="flex justify-between items-center h-fit w-full m-15  space-x-8">
          <h1 className="font-pacifico text-[40px]">vantela</h1>
          <ul className='flex space-x-12 justify-center flex-grow ml-15'>
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
        </nav>
      </div>
    </div>
  </div>
  )
}

export default App 
 