import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';


const Container = styled.div`
height:60px;
${mobile({ height: "50px" })};
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content : space-between;
align-items: center;
${mobile({ height: "50px" })};
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
margin-left: 25px;
border: 0.5px solid gray;
display: flex;
align-items: center;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })};
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })};
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin_left: 25px;
padding: 10px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
     <Wrapper>  
       <Left> 
         <Language> En </Language>
         <SearchContainer>
           <Input/>
           <Search style= {{color: "gray", fontSize: 16}} />
         </SearchContainer>
        </Left>
       <Center> 
         <Logo> FashionTales. </Logo>
        </Center>
       <Right> 
         <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
        <Badge badgeContent = {quantity} color= "primary"> 
            <ShoppingCartOutlined/>
             </Badge>
          </MenuItem>
          </Link>
       </Right>
      </Wrapper>
      </Container>
  )
}

export default Navbar