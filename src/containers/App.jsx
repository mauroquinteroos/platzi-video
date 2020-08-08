/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// Styles
import '../assets/styles/App.scss';

// Custom Hooks
import useInitialState from '../hooks/useInitialState';

const URL = 'http://localhost:3000/initialState';

const App = () => {

  const [videos, categories] = useInitialState(URL);

  return (
    <>
      <Header />
      <Search />
      {videos.length === 0 ? <h1>Loading ...</h1> : (
        categories.map((category, index) => (
          videos[category].length > 0 && (
            <Categories key={index} title={category}>
              <Carousel>
                {videos[category].map((item) => <CarouselItem key={item.id} {...item} />)}
              </Carousel>
            </Categories>
          )
        )))
      }
      <Footer />
    </>
  );
};

export default App;
