import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slice/cartSlice';

const ItemContainer = styled.li`
  margin: 1rem auto;
  border-radius: 6px;
  padding: 1rem;
  background-color: white;
  width: 90%;
  max-width: 40rem;

  > p {
    color: #3a3a3a;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  >.price {
    border-radius: 30px;
    padding: 0.15rem 1.5rem;
    background-color: #3a3a3a;
    color: white;
    font-size: 1.5rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ProductItem({ list }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id: list.id,
      title: list.title,
      price: list.price
    }));
  }

  return (
    <ItemContainer>
      <ItemHeader>
        <h3>{list.title}</h3>
        <div className="price">${list.price.toFixed(2)}</div>
      </ItemHeader>
      <p>{list.description}</p>
      <Actions>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </Actions>
    </ItemContainer>
  );
};

export default ProductItem;
