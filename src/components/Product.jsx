import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
opacity: 0;
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display:flex;
justify-content: space-between;
align-items: center;
background-color: rgba(0,0,0,0.2);
z-index:3;
transition: all 0.5s ease;
cursor: pointer;
`
const Container = styled.div`
flex:1;
margin: 5px;
position: relative;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
&:hover ${Info}{
  opacity: 1;
}
`
const Image = styled.img`
height: 75%;
  z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
background-color: white;
border-radius: 50%;
margin: 10px;
transition: all 0.5s ease;
display:flex;
justify-content: center;
align-items: center;
&:hover{
  background-color:#e9f5f5;
  transform: scale(1.1);
}
`
function Product({item}) {
  return (
    <div>
        <Container>
            <Image src={item.img} />
            <Info>
              <Icon>
                 <ShoppingCartOutlined/>
              </Icon>
              <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
              <Icon>
                <FavoriteBorderOutlined/>
              </Icon>
            </Info>
            
        </Container>
    </div>
  )
}

export default Product