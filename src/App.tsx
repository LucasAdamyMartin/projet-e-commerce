import MenuContextProvider from "./context/MenuContextProvider"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"

function App() {

  return ( 
  <>
  <MenuContextProvider>
    <Header />
  </MenuContextProvider>
  <Footer />  
  </>
  )
}

export default App 