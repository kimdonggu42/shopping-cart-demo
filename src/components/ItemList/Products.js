import styled from 'styled-components';
import ProductItem from './ProductItem';
import DUMMY_PRODUCTS from '../../DummyData';

const ProductsContainer = styled.section`
width: 600px;

> h2 {
  color: white;
  margin: 2rem auto;
  text-align: center;
  text-transform: uppercase;
}

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

function Products() {
  return (
    <ProductsContainer>
      <h2>Item List</h2>
      <ul>
        {DUMMY_PRODUCTS.map((value) => {
          return (<ProductItem
            key={value.id}
            list={value}
          />
          );
        })}
      </ul>
    </ProductsContainer>
  );
};

export default Products;
