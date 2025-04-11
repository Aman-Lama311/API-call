import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShimmerThumbnail, ShimmerTitle, ShimmerText } from "react-shimmer-effects";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const fetched = useRef(false);

  const fetchData = async () => {
    if (fetched.current) return;
    fetched.current = true;
    setLoad(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (load) {
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center py-6">All Products</h1>
        <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-8 py-5 justify-items-center">
          {Array(8).fill().map((_, index) => (
            <div key={index} className="shadow-lg space-y-4 p-4 w-[300px]">
              <ShimmerThumbnail height={220} width={260} />
              <ShimmerTitle line={1} gap={10} />
              <ShimmerText line={2} gap={10} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6">All Products</h1>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-8 py-5 justify-items-center">
        {data.map((item) => (
          <div className="shadow-lg space-y-4 p-4 w-[300px]" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                className="w-[200px] h-[220px] mx-auto hover:scale-105 transition-all cursor-pointer"
                src={item.image}
                alt={item.title}
              />
            </Link>
            <h1 className="text-lg font-semibold mt-4">{item.title}</h1>
            <div className="flex justify-between">
              <p>⭐{item.rating.rate}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
