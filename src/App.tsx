import MenuContextProvider from "./context/MenuContextProvider"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { Home } from "./layout/Home"

function App() {

  return ( 
  <>
  <MenuContextProvider>
    <Header />
  </MenuContextProvider>
    <Home />
  <Footer />  
  </>
  )
}

export default App 