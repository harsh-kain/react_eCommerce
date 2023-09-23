import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import CartPage from './Pages/CartPage'
import Checkout from './Pages/Checkout'
import ProductDetailPage from './Pages/ProductDetailsPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-details",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
