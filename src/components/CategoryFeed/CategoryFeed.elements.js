import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesSection = styled.div`
  padding: 80px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: -webkit-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: -o-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: -moz-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: linear-gradient(0deg, #f0f0f0 91%, #a8a1ff 91%);
  padding-top: 240px;
  margin-top:-80px;
  margin-bottom: -250px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1280px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriesHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 18px;
  text-align: center;
  margin-bottom: 50px;
`;


export const CategoriesContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
  }
`;

//Filter Card

export const FiltersCard = styled(Link)`
  background: #fff;
  width: 280px;
  height: 309px;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  margin-right: 24px;
  top:150px;
  position: sticky;
  padding: 8px;


  @media screen and (max-width: 1280px) {
    width: 350px;
    
    &:not(:first-child) {
    margin-left: 0px;
    margin-top: 14px;
  }
  }
`;


export const ExpandableFilter = styled.div`
border-radius: 12px;
color: #000;
white-space: nowrap;
padding: 10px 20px 10px 20px;
font-size: 16px;
outline: none;
z-index:1;
background: #f5f5f5;
border-radius: 0px 0px 0px 0px;
display: ${({click}) => (click ? 'block' : 'none')};

&:nth-child(2) {
  border-radius: 12px 12px 0px 0px;
}

&:nth-last-child(1) {
  border-radius: 0px 0px 12px 12px;
  margin-bottom: 8px;
}

&:hover {
  transition: all 0.3s ease-ease-in-out;
  background: #f5f5f5;
}

@media screen and (max-width: 960px) {
  width:100%;
}
`;

export const FilterButton = styled.div`
border-radius: 12px;
color: #000;
border: 1px solid #cfcfcf;
background-color: white;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
outline: none;
cursor: pointer;
z-index: 2;
margin-bottom: 8px;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #f5f5f5;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export const FilterButtonSubmit = styled.div`
border-radius: 12px;
color: #000;
border: 1px solid #a8a1ff;
background-color: #a8a1ff;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
outline: none;
cursor: pointer;
z-index: 2;
bottom: 0;
margin-top: 8px;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #b6b0ff;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export const FilterSection = styled.div`
`;

export const IconStyle = styled.div`
right: 0;
float: right;
`;

export const FilterLabel = styled.label`
color: #000;
position: relative;
cursor: pointer;
`;

export const FilterInputCheck = styled.input`
margin-right:10px;
`;

export const FilterSpanCheck = styled.span`

`;



export const CardsPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemCard = styled(Link)`
  background: #fff;
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 888px;
  height: 318px;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  border: 1px solid #fff;

  &:not(:first-child) {
    margin-top: 24px;
  }
  &:hover {
    border: 1px solid #cfcfcf;
  }

  @media screen and (max-width: 1280px) {
    width: 350px;
    
    &:not(:first-child) {
    margin-left: 0px;
    margin-top: 14px;

  }
    &:hover {
      transform: none;
      box-shadow: 0 6px 20px rgba(30,158,97, 0);
    }
  }
`;

export const CategoriesCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  color: #444;
`;

export const ItemInfo = styled.div`
width: 440px;
float: left;
position: relative;
color: #444;
`;

export const CategoriesCardArrow = styled.div`
  margin: auto 14px auto auto;
  float: right;
`;

export const SpecificFilter = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;
`;

export const CategoriesCardCategory = styled.h3`
  margin: 5px 14px 0px 14px;
  font-size: 22px;
`;

export const CategoriesCardDescription = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;
`;

export const ItemVisual = styled.div`
width: 440px;
height: 316px;
display: flex;
float:left;
position:relative;
left:0;

@media screen and (max-width: 1280px) {
  max-width: 100%;
  max-height: 230px;
}
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
vertical-align: middle;
display: inline-block;
border-radius: 15px;
margin: 4px;
object-fit: cover;
`;

export const SearchBar = styled.form`
margin:auto;
max-width:590px;
`;

export const SearchInput = styled.input`
padding: 11px 0px 11px 10px;
font-size: 17px;
outline: none;
border: none;
border-radius: 0 18px 18px 0;
width:450px;
float: left;
background: #f0f0f0;
margin-bottom: 45px;


&::-webkit-search-cancel-button,
&::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

&::placeholder {
    color: #75827f;
}

@media screen and (max-width: 1280px) {
    width:450px;
}
`;

export const SearchButton = styled.div`
float: left;
padding: 9px 0px 6px 14px;
background: #f1f1f1;
color: #444;
font-size: 1.2rem;
outline: none;
border: none;
border-radius: 18px 0 0 18px;
`;

export const SpacingCorrection = styled.div`
height:200px;
background-color: #f1f1f1;
`;



