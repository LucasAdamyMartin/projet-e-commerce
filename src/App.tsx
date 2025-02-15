import MenuContextProvider from "./context/MenuContextProvider"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Sandals } from "./pages/Sandals"
import { Shoes } from "./pages/Shoes"
import { ShoppingCart } from "./pages/ShoppingCart"
import { PaymentMethod } from "./pages/PaymentMethod"
import { ContactUs } from "./pages/ContactUs"

function App() {

  return ( 
    
    <BrowserRouter>
      <MenuContextProvider>
        <Header />
      </MenuContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/sandals" element={<Sandals/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/shoppingCart" element={<ShoppingCart/>}/>
          <Route path="/paymentMethod" element={<PaymentMethod/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes>
      <Footer />  
    </BrowserRouter>
  )
}

export default App 