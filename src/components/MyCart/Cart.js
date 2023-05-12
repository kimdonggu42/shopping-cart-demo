import styled from "styled-components";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = styled.div`
margin-top: 15px;
  border-radius: 6px;
  padding: 1rem;
  width: 600px;
  max-width: 40rem;
  color: white;
  background-color: #313131;

  > h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }
`;

const CartWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function Cart() {
  const cartItems = useSelector(state => state.cartReducer.items);

  return (
    <CartContainer>
      <h2>My Shopping Cart</h2>
      <CartWrapper>
        {cartItems.map((value) => {
          return (
            <CartItem
              key={value.id}
              list={value}
            />)
        })}
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
