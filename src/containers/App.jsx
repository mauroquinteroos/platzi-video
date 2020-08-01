/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// Styles
import '../assets/styles/App.scss';

const App = () => {

  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:3000/initialState');
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error(`Error message: ${err.message}`);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      {videos.trends.length > 0 && (
        <Categories title='Trends'>
          <Carousel>
            {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      {videos.originals.length > 0 && (
        <Categories title='Originals'>
          <Carousel>
            {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </>
  );
};

export default App;
