import Login from "./features/auth/components/Login.jsx";
import SignUp from "./features/auth/components/Signup.jsx"
import ProductList from "./features/productlist/ProductList.jsx"
import Homepage from "./pages/Homepage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import Cart from "./features/cart/Cart.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckOut from "./pages/CheckOut.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckOut />} />
      {/* ... etc. */}
    </Route>
  )
);
const App = () => {
  return (
    <div className="">
   <RouterProvider router={router}/>
      {/* <ProductList/> */}
    </div>
  )
}
export default App