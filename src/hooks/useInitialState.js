import { useState, useEffect } from 'react';

const useInitialState = (URL) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    original: [],
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setVideos(data);
        setCategories(Object.keys(data));
      } catch (err) {
        console.error(`Error message: ${err.message}`);
      }
    };
    getData();
  }, []);

  return [videos, categories];
};

export default useInitialState;
