import React from 'react';
import styled from 'styled-components';

import userImage from '../assets/images/users/user1.svg';
import loadingImage from '../assets/images/misc/loading.gif';





const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

const Title = styled.h1`
  width: 100%;
  color: black;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;





/////////////////////////////////////////



  export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }
  
  Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
  };
  
  Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
  };
  
  Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps}  src={src ? userImage : loadingImage} />;
  };
  
  // src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} 

  Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
  };