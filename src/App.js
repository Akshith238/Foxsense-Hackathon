import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/root/SignIn';
import AdminSignIn from './components/root/AdminSignIn';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { OrderContextProvider } from './context/OrderContext';
import Order from './components/order/Order';

function App() {
  return (
    <OrderContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className='App font-poppins'>
            <Routes>
              <Route exact path="/" Component={SignIn} />
              <Route exact path="/admin" Component={AdminSignIn} />
              <Route exact path="/cart" Component={Cart} />
              <Route exact path="/orders" Component={Order} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </OrderContextProvider>
  );
}

export default App;
