import axios from "axios";
import { showNotification } from "../slice/uiSlice";
import { replaceCart } from "../slice/cartSlice";


export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://redux-http-97631-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`
      );
      const data = await res.json();
      dispatch(replaceCart(data));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const postCartData = (cart) => {
  return async (dispatch) => {
    dispatch(showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));
    try {
      await axios.put(`https://redux-http-97631-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`, cart)
      dispatch(showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data successfully!'
      }));
    } catch (err) {
      dispatch(showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!'
      }));
    }
  }
}