import MenuContextProvider from "./context/MenuContextProvider"
import { Header } from "./layout/Header"

function App() {

  return ( 
  <MenuContextProvider>
    <Header />
  </MenuContextProvider>  
  )
}

export default App 