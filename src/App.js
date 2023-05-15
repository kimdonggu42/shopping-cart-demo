import styled from 'styled-components';
import MainHeader from './components/Header/MainHeader';
import Cart from './components/MyCart/Cart';
import Products from './components/ItemList/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, postCartData } from './redux/action/cartCation';

const ItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 50px;
`;

// 렌더링 될 때 값이 변경되지 않도록 컴포넌트 외부에서 정의
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.uiReducer.cartIsVisible);
  const cart = useSelector(state => state.cartReducer);
  const notification = useSelector(state => state.uiReducer.notification);

  console.log(cart)

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // 처음 렌더링 될 때 put 요청이 실행되므로 장바구니가 비어있는 상태로 오버라이딩 되는 것을 막기 위해
    // putCartItem이 실행되기 전 return하여 차단
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(postCartData(cart))
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <MainHeader />
      <ItemArea>
        <Products />
        {showCart && <Cart />}
      </ItemArea>
    </>
  );
}

export default App;