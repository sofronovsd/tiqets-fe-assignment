import React from 'react';
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Offers from "./components/Offers/Offers";

const Divider = styled.div`
  display: flex;
  align-self: stretch;
  background: #DDD;
  height: 1px;
`

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Filters />
      <Divider />
      <Offers />
      <Footer />
    </Wrapper>
  );
}

export default App;
