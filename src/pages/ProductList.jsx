import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from 'react';



const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;





const ProductList = () => {
const [filters,setFilter]= useState({})
const Location = useLocation();
const [sort,Setsort] = useState("newest")
const cat =  Location.pathname.split('/')[2]
console.log(cat)


const HandlerChange= (e)=>{
  const value = e.target.value
setFilter({
  ...filters,
  [e.target.name]:value
})

}
console.log(filters)


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Produits:</FilterText>
          <Select name="marque" onChange={HandlerChange}>
            <Option disabled >
              marque
            </Option>
            <Option>hp</Option>
            <Option>dell</Option>
            <Option>macbook</Option>
            
          </Select>
          <Select name="color" onChange={HandlerChange}>
            <Option disabled >
              color
            </Option>
            <Option>rouge</Option>
            <Option>noir</Option>
            <Option>blanc</Option>
          </Select>
        </Filter>
        {/* <Filter>
          <FilterText>Trier la liste:</FilterText>
          <Select onChange={(e)=>Setsort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products cat={cat} sort = {sort} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
