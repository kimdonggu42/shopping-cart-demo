import axios from "axios";
import { showNotification } from "../slice/uiSlice";
import { replaceCart } from "../slice/cartSlice";


export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://redux-http-97631-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`
      );
      const data = res.data;
      dispatch(replaceCart({
        items: data.items || [],
        totalCount: data.totalCount
      }));
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

export const putCartData = (cart) => {
  return async (dispatch) => {
    dispatch(showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));
    try {
      await axios.put(`https://redux-http-97631-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`, {
        items: cart.items,
        totalCount: cart.totalCount
      })
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