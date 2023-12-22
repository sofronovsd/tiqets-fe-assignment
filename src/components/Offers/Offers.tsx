import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import {useTripsContext} from "../../context/TripsContext";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import getProducts, {Product} from "../../api/products";

const Wrapper = styled.section`
  min-width: 688px;
  padding: 24px 16px;
  display: flex;
  flex-grow: 1;

  @media(max-width: 720px) {
    min-width: unset;
  }
`

const NotificationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const NotificationText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`

const Offers = () => {
  const { selectedDate, selectedCity} = useTripsContext();
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (selectedCity && selectedDate) {
      getProducts(selectedDate, selectedCity.id)
        .then(products => {
          setProducts(products)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }, [selectedCity, selectedDate]);

  const showNotificationBox = useMemo(() => {
    return !selectedDate || !products.length
  }, [selectedDate, products])

  const notificationText = useMemo(() => {
    if (!selectedDate) {
      return 'Select filters first'
    }
    if (!products.length) {
      return 'Nothing found, please try a different date'
    }
    return 'Something went wrong'
  }, [selectedDate, products])

  return (
    <Wrapper>
      {showNotificationBox ? (
        <NotificationBox>
          <NotificationText>{notificationText}</NotificationText>
        </NotificationBox>
      ) : (
        <ProductsGrid products={products} />
      )}
    </Wrapper>
  );
};

export default Offers;
