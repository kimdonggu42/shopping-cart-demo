import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/slice/uiSlice';

const MyCartButton = styled.button`
  background-color: transparent;
  border-color: #1ad1b9;
  color: #1ad1b9;

  > span {
    margin: 0 0.5rem;
  }

  &:hover {
    color: white;
  }
`;

const CartCount = styled.span`
  background-color: #1ad1b9;
  border-radius: 30px;
  padding: 0.15rem 1.25rem;
  color: #1d1d1d;
`;

function CartButton() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cartReducer.totalCount);

  const toggleCartHandler = () => {
    dispatch(toggle());
  }

  return (
    <MyCartButton onClick={toggleCartHandler}>
      <span>My Cart</span>
      <CartCount>{cartCount}</CartCount>
    </MyCartButton>
  );
};

export default CartButton;
