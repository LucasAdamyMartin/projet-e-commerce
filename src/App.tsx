import { BrowserRouter } from "react-router-dom"
import MenuContextProvider from "./context/MenuContextProvider"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { Routers } from "./Routers"

function App() {

  return ( 
      <BrowserRouter basename="/projet-e-commerce">
      <MenuContextProvider>
      <Header />
      <Routers/>
      <Footer />  
      </MenuContextProvider>
      </BrowserRouter>
  )
}

export default App 