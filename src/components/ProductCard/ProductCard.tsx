import React from 'react';
import styled from "styled-components";
import {Product} from "../../api/products";
import LazyImage from "../LazyImage/LazyImage";

const CardWrapper = styled.article`
  display: flex;
   width: 343px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 8px;
  background: #FFF;
  cursor: pointer;
  overflow: hidden;

  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.20), 0 2px 4px 0 rgba(0, 0, 0, 0.10);

  @media(max-width: 425px) {
    flex-direction: row;
    align-items: stretch;
    height: 136px;
  }
`

const ProductInfo = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 16px;

  @media(max-width: 425px) {
    padding: 12px;
  }
`

const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

const ProductPriceContainer = styled.div`
  display: flex;
  gap: 8px;
`

const ProductTitle = styled.h3`
  color: #000;
  font-family: Roboto Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;

  @media(max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`

const ProductSummary = styled.p`
  color: #000;
  font-family: Roboto Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`

const ProductPrice = styled.span<{ highlighted: boolean }>`
  color: ${({highlighted}) => highlighted ? '#B00' : '#000'};
  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

const ProductPreDiscountPrice = styled.span`
  color: #555;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration: line-through;
`

type Props = {
  product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <CardWrapper onClick={() => {
      window.location.href = product.product_url
    }}>
      <LazyImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTextContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductSummary>{product.summary}</ProductSummary>
        </ProductTextContainer>
        <ProductPriceContainer>
          <ProductPrice highlighted={!!product.discount_percentage}>
            {product.price.toFixed(2)}
          </ProductPrice>
          {product.discount_percentage && (
            <ProductPreDiscountPrice>
              {(product.price * (1 + product.discount_percentage / 100)).toFixed(2)}
            </ProductPreDiscountPrice>
          )}
        </ProductPriceContainer>
      </ProductInfo>
    </CardWrapper>
  );
};

export default ProductCard;
