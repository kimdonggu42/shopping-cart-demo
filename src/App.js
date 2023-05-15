import styled from 'styled-components';
import MainHeader from './components/Header/MainHeader';
import Cart from './components/MyCart/Cart';
import Products from './components/ItemList/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


const ItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 50px;
`;

function App() {
  const showCart = useSelector(state => state.uiReducer.cartIsVisible);
  const cart = useSelector(state => state.cartReducer);

  console.log(cart)

  useEffect(() => {
    const putCartItem = async () => {
      await axios.put(`https://redux-http-97631-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`, cart)
    }
    putCartItem();
  }, [cart])

  return (
    <>
      <MainHeader />
      <ItemArea>
        <Products />
        {showCart && <Cart />}
      </ItemArea>
    </>
  );
}

export default App;
