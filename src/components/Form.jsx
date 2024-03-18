import React from 'react';
import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }
  
  Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
  };
  
  Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
  };
  
  Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  
  Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
  };
  
  Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  
  Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
  };
  
  Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
  };


export default Form;