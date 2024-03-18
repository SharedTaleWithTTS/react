export default function selectionFilter({ series, films } = []) {
    return {
      series: [
        { title: '마법', data: series?.filter((item) => item.genre === 'documentaries') },
        { title: '동물', data: series?.filter((item) => item.genre === 'comedies') },
        { title: '사랑', data: series?.filter((item) => item.genre === 'children') },
        { title: '모험', data: series?.filter((item) => item.genre === 'crime') },
        { title: '가족', data: series?.filter((item) => item.genre === 'feel-good') },
        { title: '교훈', data: series?.filter((item) => item.genre === 'feel-good') },
      ],
      films: [
        { title: '마법', data: films?.filter((item) => item.genre === 'documentaries') },
        { title: '동물', data: films?.filter((item) => item.genre === 'comedies') },
        { title: '사랑', data: films?.filter((item) => item.genre === 'children') },
        { title: '모험', data: films?.filter((item) => item.genre === 'crime') },
        { title: '가족', data: films?.filter((item) => item.genre === 'feel-good') },
        { title: '교훈', data: films?.filter((item) => item.genre === 'feel-good') },
      ],
    };
  }


  // export default function selectionFilter({ series, films } = []) {
  //   return {
  //     series: [
  //       { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
  //       { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
  //       { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
  //       { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
  //       { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
  //     ],
  //     films: [
  //       { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
  //       { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
  //       { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
  //       { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
  //       { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
  //     ],
  //   };
  // }