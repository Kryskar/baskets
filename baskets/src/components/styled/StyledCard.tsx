import styled from "styled-components";
import { Cart } from "../../App";
import { useState } from "react";
import { Chart } from "../../Chart";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;

const StyledLi = styled.li`
  font-size: 10px;
`;

export const Card = ({ basket }: { basket: Cart }) => {
  const [cardState, setCardState] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (cardState < 1) {
      setCardState(cardState + 1);
    } else if (cardState === 1) {
      navigate(`/chart/${basket.id}`, { state: basket.products });
    }
  };

  const cardInfo = (
    <>
      <p>cart number: {basket.id}</p>
      <p>total value:{basket.total}</p>
    </>
  );
  const cardDetails = (
    <ul>
      {basket.products.map((product) => (
        <StyledLi key={product.id}>
          {product.title}, quantity: {product.quantity}, price:{product.price}
        </StyledLi>
      ))}
    </ul>
  );
  const cardChart = <Chart />;

  const cardRender = [cardInfo, cardDetails, cardChart][cardState];

  return (
    <>
      <StyledCard>
        <>
          {cardRender}
          <button onClick={() => handleClick()}>next</button>
        </>
      </StyledCard>
    </>
  );
};
