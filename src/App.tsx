import { Button } from './components/Button';

function App() {
  const text = "Sign In";
  const text2 = "Sign Out";
  return ( 
  <div>
    <div className="h-8.5 w-screen bg-gray-100"></div>
    <div className="flex h-32 w-screen">
      <div className="flex justify-end w-full h-full">
        <div className="w-max">
          <Button text={text} variant='outline'></Button>
          <Button text={text2} variant='inline'></Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App 
 