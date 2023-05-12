import styled from 'styled-components';
import CartButton from './CartButton';

const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #593d88;

  > h1 {
    color: white;
  }
`;

function MainHeader() {

  return (
    <Header>
      <h1>Redux Cart</h1>
      <nav>
        <CartButton />
      </nav>
    </Header>
  );
};

export default MainHeader;
