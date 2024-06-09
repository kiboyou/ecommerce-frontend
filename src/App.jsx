import { Router,Routes,Route,Navigate, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Succes from "./pages/Succes";


const App = () => {

  const user = true
  return (
    <BrowserRouter>



<Routes>

   <Route path= "/" element={<Home/>}/>
   <Route path= "/login" element={<Login/>}/>
   <Route path= "/Register" element={ <Register/>}/>
   <Route path= "/products/:category" element={<ProductList/>}/> 
   <Route path= "/cart" element={<Cart/>}/>
   <Route path= "/success" element={<Succes/>}/>
   <Route path="/product/:id" element = {<Product/>}/>


</Routes>
    </BrowserRouter>
  )
};

export default App;