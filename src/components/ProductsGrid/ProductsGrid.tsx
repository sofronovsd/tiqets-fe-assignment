import React from 'react';
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import  {Product} from "../../api/products";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;

  @media(max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  }
`

type Props = {
  products: Product[];
}
const ProductsGrid = ({ products }: Props) => {
  return (
    <Wrapper>
      {products.map((product) => (<ProductCard key={product.id} product={product} />))}
    </Wrapper>
  );
};

export default ProductsGrid;
