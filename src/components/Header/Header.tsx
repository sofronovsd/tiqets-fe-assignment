import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 64px 16px;
  background-color: #4E2870;
`

const Title = styled.h1`
  color: #FFF;
  font-family: Roboto Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin: 0;
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>Plan your trip!</Title>
    </StyledHeader>
  );
};

export default Header;
