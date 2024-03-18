import React from "react";
import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: column;     
border-bottom: 8px solid #222;
text-align: center;
padding: 165px 45px;
`;

const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }
  
  Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };