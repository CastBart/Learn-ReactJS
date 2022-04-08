import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notfication";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisibility = useSelector((state) => state.ui.cartVisibility);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notifcation);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
