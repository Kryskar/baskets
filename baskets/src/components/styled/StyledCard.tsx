import styled from "styled-components";
import { Cart } from "../../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutateCart } from "../api/mutations";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 300px;
  height: 150px;
  cursor: pointer;
  border-radius:10px;
  background-color: #ececf3;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;

const StyledLi = styled.li`
  font-size: 10px;
`;

const StyledSpan = styled.span`
font-weight:600;
`

export const Card = ({ basket }: { basket: Cart }) => {
  const [cardState, setCardState] = useState(0);
  const navigate = useNavigate();
  const {mutate} = useMutateCart()

  const handleClick = () => {
    if (cardState < 1) {
      setCardState(cardState + 1);
    } else if (cardState === 1) {
      navigate(`/chart/${basket.id}`, { state: basket.products });
    }
  };

  const cardInfo = (
    <>
      <p>cart number: <StyledSpan>{basket.id}</StyledSpan><br/>total value: <StyledSpan>{basket.total}</StyledSpan></p>
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
 
  
  const cardRender = [cardInfo, cardDetails][cardState];
 
  return (
    <>
      <StyledCard >
        <>
          {cardRender}
          <div style={{display:"flex", gap:"10px"}}><button onClick={() => handleClick()}>next</button>
          <button onClick={()=>mutate(basket.id)}>delete</button></div>
        </>
      </StyledCard>
    </>
  );
};
