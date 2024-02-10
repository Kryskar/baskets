import { useEffect, useState } from "react"
import styled from "styled-components"
import { Card } from "./styled/StyledCard"
import { Cart } from "../App"
import { useBasketData } from "./api/queries"
import { useMutateCart } from "./api/mutations"


const StyledDashboard = styled.div`
max-width:100vw;
display:grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 20px;

`
export const StyledDiv = styled.div`
width: 100vw;
display:flex;
justify-content:center;
`


export const Dashboard = () => {
    const [baskets,setBaskets] = useState<Cart[]>([])
    const {data} = useBasketData()
    
  useEffect(()=>{ 
    setBaskets(data?.carts)
},[data])

  console.log(baskets)
  return (
    <StyledDiv>
    <StyledDashboard>
    {baskets?.map(basket => <Card key={basket.id} basket={basket}/>)}
    </StyledDashboard>
    </StyledDiv>
  )
}
