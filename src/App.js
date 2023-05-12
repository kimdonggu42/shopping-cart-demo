import styled from 'styled-components';
import MainHeader from './components/Header/MainHeader';
import Cart from './components/MyCart/Cart';
import Products from './components/ItemList/Products';
import { useSelector } from 'react-redux';

const ItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 50px;
`;

function App() {
  const showCart = useSelector(state => state.uiReducer.cartIsVisible);

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
