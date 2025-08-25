import { Route, Routes } from "react-router-dom";
import Footer from "../customer/components/Footer/Footer";
import Cart from "./../customer/components/Cart/Cart";
import Product from "./../customer/components/Product/Product";
import ProductDetails from "./../customer/components/ProductDetails/ProductDetails";
import HomePage from "./../customer/pages/HomePage/HomePage";
import Order from './../customer/components/Order/Order';
import OrderDetails from './../customer/components/Order/OrderDetails';
import Navigation from "../customer/components/Navigaion/Navigation";
import Checkout from "../customer/components/Checkout/Checkout"

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>

        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductCard /> */}
        {/* */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <DeliveryAddressForm /> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;