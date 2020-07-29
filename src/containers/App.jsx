/* eslint-disable react/no-array-index-key */
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

const Items = [1, 2, 3, 4, 5];

const App = () => (
  <>
    <Header />
    <Search />
    <Categories>
      <Carousel>
        {Items.map((value, key) => (<CarouselItem key={key} />))}
      </Carousel>
    </Categories>
    <Footer />
  </>
);

export default App;
