import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
const Container= styled.div`
`
const Title= styled.h1`
padding: 10px;
margin-bottom:20px;
`
const FilterContainer= styled.div`
display:flex;
justify-content:space-between;
padding: 10px;
margin-bottom:20px;
`
const Filter= styled.div`
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText= styled.div`
font-weight: 600;
font-size: 20px;
margin-right: 20px;
${mobile({ marginRight: "0px" })}
`
const Select= styled.select`
padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
const Option= styled.option`
`
function ProductList() {
const location = useLocation();
const cat = location.pathname.split("/")[2];
const [filters,setFilters] =useState({});
const [sort,setSort] =useState("newest");

const handleFilters = (e) => {
  const value = e.target.value;  //black
  setFilters({
    ...filters,
    [e.target.name]: value,  //  color: black(..filters) , size:L
  });
};
  return (
    <div>
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                  <Filter> 
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>

                    </Select>
                    <Select name="size" onChange={handleFilters}>
                    <Option disabled > Size </Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                    </Select>
                  </Filter>
                  <Filter> 
                  <FilterText>Sort Products:</FilterText>
                  <Select onChange={(e) => setSort(e.target.value)}>
                      <Option value= "newest"> Newest </Option>
                      <Option value= "asc">Price (asc)</Option>
                      <Option value= "desc">Black (desc)</Option>

                  </Select>
                  </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter/>
            <Footer/>
        </Container>
    </div>
  )
}

export default ProductList