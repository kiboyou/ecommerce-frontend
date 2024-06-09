import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState,useEffect } from 'react';
import axios from 'axios'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort) 
  const [Products,setProducts] = useState([])
  const [FilterProducts,setFilterproducts]=useState([])

useEffect(() => {
  const getproducts = async ()=>{
    try{
const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` :
"http://localhost:5000/api/product" )
setProducts(res.data);
    }
    catch(err){

    }
  };

  getproducts()
}, [cat])


useEffect(()=>{
  cat && setFilterproducts(
    Products.filter((item)=>
             Object.entries(filters).every(([key,value])=>
             item[key].includes(value)
                    )
                  )
  );
},[Products,cat,filters])




  return (
    <Container>
      {FilterProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
