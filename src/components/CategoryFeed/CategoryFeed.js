  
import React, {useState} from 'react';
import { IconContext } from 'react-icons/lib';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import VizTransportacion from '../../assets/categ-carro.png';
import {
  CategoriesSection,
  CategoriesWrapper,
  CategoriesHeading,
  CategoriesContainer,
  FiltersCard,
  CategoriesCardDescription,
  CategoriesCardCategory,
  CardsPage,
  ItemVisual,
  Visual,
  SpacingCorrection,
  ItemCard,
  ItemInfo,
  ExpandableFilter,
  FilterButton,
  FilterInputCheck,
  FilterSpanCheck,
  FilterLabel,
  IconStyle,
  FilterButtonSubmit,
  FilterSection,
} from './CategoryFeed.elements';


function Categories(itemLink) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
      <CategoriesSection>
        <CategoriesWrapper>
          <CategoriesHeading>Inmobiliaria</CategoriesHeading>

           <CategoriesContainer>
            <FiltersCard>

              <FilterSection>
                <FilterButton  onClick={handleClick}>
                  <FilterLabel>Alquiler o Compra</FilterLabel>
                  <IconStyle>{click ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Alquiler
                </ExpandableFilter>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Compra
                </ExpandableFilter>
              </FilterSection>

              <FilterSection>
                <FilterButton  onClick={handleClick}>
                  <FilterLabel>Tipo de Vivienda</FilterLabel>
                  <IconStyle>{click ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Alquiler
                </ExpandableFilter>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Compra
                </ExpandableFilter>
              </FilterSection>

              <FilterSection>
                <FilterButton  onClick={handleClick}>
                  <FilterLabel>Precio</FilterLabel>
                  <IconStyle>{click ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Alquiler
                </ExpandableFilter>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Compra
                </ExpandableFilter>
              </FilterSection>

              <FilterSection>
                <FilterButton  onClick={handleClick}>
                  <FilterLabel>Superficie</FilterLabel>
                  <IconStyle>{click ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Alquiler
                </ExpandableFilter>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Compra
                </ExpandableFilter>
              </FilterSection>

              <FilterSection>
                <FilterButton  onClick={handleClick}>
                  <FilterLabel>Localizacion</FilterLabel>
                  <IconStyle>{click ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Alquiler
                </ExpandableFilter>
                <ExpandableFilter click={click}>
                  <FilterInputCheck type="checkbox"></FilterInputCheck>
                  <FilterSpanCheck></FilterSpanCheck>
                  Compra
                </ExpandableFilter>
              </FilterSection>

              <FilterButtonSubmit>
                <FilterLabel>Filtrar</FilterLabel>
              </FilterButtonSubmit>
            </FiltersCard>

            
            <CardsPage>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            <ItemCard to={itemLink}>
                <ItemVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </ItemVisual>
                <ItemInfo>
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                </ItemInfo>
            </ItemCard>
            </CardsPage>

          </CategoriesContainer>
                    
        </CategoriesWrapper>
      </CategoriesSection>
      <SpacingCorrection />
    </IconContext.Provider>
    
  );
}
export default Categories;