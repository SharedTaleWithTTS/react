import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import Card from '../components/Card';
import Header from '../components/Header';
import Loading from '../components/Loading'; 
import Player from '../components/Player';
import * as ROUTES from '../routes/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer }  from './profiles';
import  FooterContainer  from './footer';

import { getAuth } from "firebase/auth";

// 추가,,, 아직 안씀
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import TestApi from '../components/Test'; // TestButton인데 뭐지.. 바꾸면 빌드가 안됨..





export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = getAuth().currentUser || {}; // 승인된 유저만

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  // fuse.js로 검색
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="disney" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="logo-alt" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              창작동화
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              전래동화
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => getAuth().signOut()}>로그아웃</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>동화 제목</Header.FeatureCallOut>
          <Header.Text>
            동화 텍스트.. 동화 텍스트.. 동화 텍스트.. 
          </Header.Text>
          <Header.PlayButton>TTS 재생</Header.PlayButton>
          <TestApi />
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  {/* <Card.Image src={`../assets/images/${category}/${item.genre}/${item.slug}/small.jpg`} /> */}


                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                  
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group> 
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}