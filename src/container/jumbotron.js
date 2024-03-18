import React from 'react';
import jumboData from '../fixtures/jumbo';
import Jumbotron from '../components/Jumbotron';

// 이미지 import
import penguinImage from '../assets/images/misc/penguin.jpg';
import home01Image from '../assets/images/misc/home01.jpg';
import home02Image from '../assets/images/misc/home02.jpg';

// import 하면 다 이렇게 해야되나?

export default function JumbotronContainer() {
  const modifiedData = jumboData.map(item => ({
    ...item,
    // 각 항목에 대한 이미지 하드코딩
    image: item.id === 1 ? penguinImage : 
           item.id === 2 ? home01Image :
           home02Image
  }));

  return (
    <Jumbotron.Container>
      {modifiedData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            {/* 이미지 import 사용 */}
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
