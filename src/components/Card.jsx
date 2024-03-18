import React, { useState, useContext, createContext } from 'react';
import styled from 'styled-components';


// 동화 보여주는 컴포넌트


//css
const Title = styled.p`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

// Container 마지막 요소에 아래쪽 여백을 없앰
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
 
// 그룹화하는 컴포넌트
// alignItems, margin 는 컴포넌트에 전달된 props 중 하나
// 이 props가 존재하면 해당 스타일 적용
const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

// 호버 기능 활성화 시,
// 나오는 제목
const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

// 호버 기능 활성화 시,
// 카드에 표시할 일반 텍스트
// 동화에 대한 설명?
const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

// 카드의 내용을 나타내는 entities(이미지, 비디오 등)
const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

// 카드 호버 시 나올 간략한 정보
// 카드의 추가 정보 표시
const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;


// 카드를 구성하는 여러 요소
// cursor를 가져가면 줌인됨(z-index 변경)
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

const FeatureText = styled.p`
  font-size: 18px;
  color: black;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

// <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
// 화면 너비가 1000px 이하일 때, 컨테이너의 높이가 자동으로 조정
// 배경 이미지의 크기도 자동으로 조정(src=?)
// relative	요소 자기 자신을 기준으로 배치
// x축 right면 오른쪽에 붙어 나옴 => 왼쪽엔 글
const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #EFFBFB;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

// 오른쪽 상단에 위치
// 하얀색이기 때문에 바꿀 수도
const FeatureClose = styled.button`
  color: black;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

// 컨텐츠의 여백과 최대 너비를 설정
// 화면 너비가 1000px 이하일 때 여백이 30px로 변경

const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

// 동화 표지
// 그 밑에 좋아요, 리뷰 등 표시
const Content2 = styled.div`
  margin: 56px;
  max-width: 400px;
  

`;

// 연령대, 나이 등급
// 15세 이상이면 빨간색 아니면 초록색
// 원 안에 숫자 표시
const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;



////////////////////////////////////////




export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  // 카드의 상세 정보를 보여줄지 상태를 나타냄, 초기값 false
  const [showFeature, setShowFeature] = useState(false);
  // 카드의 상세 정보 데이터를 저장하는 상태를 나타냄, 
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}






Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};




// item (프롭) : Card.Item이 클릭되었을 때 관련 정보를 처리하기 위한 데이터
// 이 정보를 통해 화면에 특정 아이템의 세부 정보(feature)를 표시하거나 다른 작업을 수행할 수 있음

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};



Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};



// 임시 테스트
const Feature1 = styled.div`
  margin: 16px; 
  display: flex;
  flex-direction: row;
  position: relative;
  height: 260px;
  width: 260px;
  background: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #EFFBFB;
  overflow: hidden;
  background-position-x: right;

  /* 좋아요, 리뷰 아이콘 컨테이너 스타일 */
  .icon-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 50%;
  }

  /* 좋아요, 리뷰 아이콘 스타일 */
  .icon {
    width: 20px;
    height: 20px;
    /* 아이콘 스타일링 */
  }

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

// 테스트
//
//
//
// 테스트

// 포스트 컴포넌트 정의
const Post = styled.div`
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

// 이미지 스타일 정의
// 사진 크기에 맞게 되는지???????????????????????????
const ImageTest = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

// 하트 아이콘 스타일 정의
const HeartIcon = styled.span`
  color: red;
  margin-right: 5px;
`;

// 댓글 아이콘 스타일 정의
const CommentIcon = styled.span`
  color: #333;
  margin-right: 5px;
`;

// 공유 아이콘 스타일 정의
const ShareIcon = styled.span`
  color: #007bff;
  margin-right: 5px;
`;

// 저장(북마크) 아이콘 스타일 정의
const BookmarkIcon = styled.span`
  color: #28a745;
  margin-right: 5px;
`;

// // 포스트 컴포넌트를 렌더링
// const PostComponent = () => (
//   <Post>
//     <Image src="https://example.com/image.jpg" alt="Post Image" />
//     <p>Post content...</p>
//     <div>
//       <HeartIcon>❤️</HeartIcon>
//       <CommentIcon>💬</CommentIcon>
//       <ShareIcon>➡️</ShareIcon>
//       <BookmarkIcon>🔖</BookmarkIcon>
//     </div>
//   </Post>
// );



// <블라블라Text>{.description}</블라블라Text>
// genre 첫글자 빼고 소문자 
// 우린 한글인디?? => 수정필요
// 수정 전   <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
// 수정 후   <Feature>

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <>
    <Feature>
      <Content>

        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
      <Content></Content>
      <Post>
        <ImageTest {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} alt="Post Image" />
        <p>Post content...</p>
        <div>
          <HeartIcon>❤️</HeartIcon>
          <CommentIcon>💬</CommentIcon>
          <ShareIcon>➡️</ShareIcon>
          <BookmarkIcon>🔖</BookmarkIcon>
        </div>
      </Post>
    </Feature>
    <Feature1 {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <div className="icon-container">
        {/* 좋아요, 리뷰 아이콘 */}
        <img className="icon" src="like_icon.png" alt="Like Icon" />
        <img className="icon" src="review_icon.png" alt="Review Icon" />
      </div>
    </Feature1>
    <Post>
      <ImageTest {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} alt="Post Image" />
      <p>Post content...</p>
      <div>
        <HeartIcon>❤️</HeartIcon>
        <CommentIcon>💬</CommentIcon>
        <ShareIcon>➡️</ShareIcon>
        <BookmarkIcon>🔖</BookmarkIcon>
      </div>
    </Post>
    </>
  ) : null;
};


