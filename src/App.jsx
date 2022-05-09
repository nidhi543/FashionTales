import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, //redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return <div>
  <Router>
  <Routes>
    <Route exact path="/" element={<Home />}/>
  
    <Route exact path="/products/:category" element={ <ProductList />}/>
    
    <Route exact path="/product/:id" element={ <Product />}/>
    
    <Route exact path="/cart" element={<Cart />}/>
      
    <Route exact path="/login" element={user ? <Navigate replace to="/" /> : <Login />}/>
    <Route exact path="/register" element={user ? <Navigate replace to="/" />  : <Register />}/>

  </Routes>
</Router>
  </div>;
};

export default App;