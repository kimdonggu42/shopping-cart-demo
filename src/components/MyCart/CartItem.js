import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/slice/cartSlice';

const CartItemContainer = styled.li`
  margin: 1rem 0;
  background-color: #575757;
  padding: 1rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.75rem;
    }
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  > .itemprice {
    font-weight: normal;
    font-size: 1rem;
    font-style: italic;
  }
`;

const Count = styled.div`

> span {
  font-size: 1.5rem;
  font-weight: bold;
}
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;

  > button {
    background-color: transparent;
    border: 1px solid white;
    margin-left: 0.5rem;
    padding: 0.15rem 1rem;
    color: white;

    &:hover {
      background-color: #4b4b4b;
      color: white;
    }
  }
`;

function CartItem({ list }) {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(list.id));
  }

  const addItemHandler = () => {
    dispatch(addItemToCart({
      id: list.id,
      title: list.title,
      price: list.price
    }))
  }

  return (
    <CartItemContainer>
      <Header>
        <h3>{list.title}</h3>
        <Price>
          ${list.totalPrice.toFixed(2)}<br />
          <span className="itemprice">(${list.price.toFixed(2)} / item)</span>
        </Price>
      </Header>
      <Details>
        <Count>
          x <span>{list.count}</span>
        </Count>
        <Actions>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </Actions>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
