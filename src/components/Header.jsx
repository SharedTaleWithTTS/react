import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';
import BGImage from '../assets/images/misc/home-bg.jpg';
import noBGImage from '../assets/images/misc/home-bgNo.jpg';
import searchIcon from "../assets/images/icons/search.png";
import userImage from "../assets/images/users/user2.png";

// 스타일 컴포넌트 안에서
// 즉 css 에서 직접적으로 외부 이미지 파일을 'src' 속성에 할당 못함
// 이 경우 , 이미지 경로 설정시, url() 사용
// url('path/to/image.jpg'); 해당하는 경로 import 해서 사용

// 삼항 연산자 해야할듯
// container/browse 에서 
// <Header src="disney" dontShowOnSmallViewPort> 요부분 나오게
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
  url(${ BGImage }) top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

//  url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// no-repeat; 

const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus { 
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;

const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const FeatureCallOut = styled.h2`
  color: black;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

const Text = styled.p`
  color: black;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #EFFBFB;
  color: black;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;



export default function Header({ bg = true, children, ...restProps }) {
  // 배경이 있는 경우 배경을 표시하고, 아닌 경우 자식 요소만 표시
    return bg ? (
      <Background  data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
  }
  
  Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  };
  
  Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
  
  // 로고를 정의하고, 리액트 라우터 링크를 사용하여 로고를 클릭하면 지정된 경로로 이동
  Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <Logo {...restProps} />
      </ReachRouterLink>
    );
  };
  // 검색어 
  Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
  
    return (
      // 서치 아이콘 클릭시 이전 상태의 반대 값으로 만듦, 활성화 or 비활성화
      <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
          <img src={searchIcon} alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="제목, 장르"
          active={searchActive}
          data-testid="search-input"
        />
      </Search>
    );
  };
  



  Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };
  
  Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
  };
  
  Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={userImage} />;
  };
  // return <Picture {...restProps} src={`/images/users/${src}.png`} />;
  
  Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
  };
  
  Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  
  Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };
  
  Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
  };
  
  Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  
  // 로그인 버튼으로 사용, 로그아웃은 프로필창 누르면 나옴
  Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
  };

