import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  align-self: stretch;
  background: #333;
`

const Text = styled.span`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.6px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Text>© 2014-2021 Tiqets Amsterdam</Text>
    </StyledFooter>
  );
};

export default Footer;
