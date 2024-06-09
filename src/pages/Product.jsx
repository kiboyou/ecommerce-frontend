import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { publicRequest } from '../requestMethode';
import { useDispatch } from "react-redux";
import { addproduct } from "../redux/cartRedux";
import { Link } from 'react-router-dom';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {

  const Location = useLocation();
  const id =  Location.pathname.split('/')[2]
const [Product,setProduct]=useState({})
const [quantity,setQuantity]=useState(1)
const dispatch = useDispatch()

useEffect(()=>{
  const getProduct = async ()=>{

  try{
const res = await publicRequest.get("/product/find/"+id );

setProduct(res.data)



  }
  catch{}

  };

 getProduct()
 
},[id])


const handlerquantity = (type)=>{
if(type==="dec"){
  quantity>1 && setQuantity(quantity - 1)
}else{
setQuantity(quantity+1)
}
}


const handlerClick = ()=>{

//update carte(panier)
dispatch(addproduct({...Product,quantity}));


}

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={Product.img} alt={Product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{Product.title}</Title>
          <Desc>
            {Product.desc}
          </Desc>
          <Price>{Product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color={Product.color='noir'? "black" : "white"} />
             
            </Filter>
            <Filter>
              <FilterTitle>Marque</FilterTitle>
              <FilterSize>
                <FilterSizeOption>{Product.marque}</FilterSizeOption>
               
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handlerquantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=> handlerquantity("inc")} />
            </AmountContainer>
            <Button onClick={handlerClick}>Ajoutez au panier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
