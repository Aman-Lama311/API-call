import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShimmerThumbnail, ShimmerTitle, ShimmerText } from "react-shimmer-effects";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const fetched = useRef(false);

  const fetchData = async () => {
    if (fetched.current) return;
    fetched.current = true;
    setLoad(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      setFilteredData(response.data);
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
      {/* search feature */}
      <div>
        <form className='flex gap-4 ml-16 mt-12' onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text" 
        placeholder='Enter product...' 
        value={search} onChange={(e) => setSearch(e.target.value)} className='px-2 py-2 outline-none border rounded-md md:w-[20vw]' 
        />

        <Button type='submit'
         onClick={() => setFilteredData(data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))}>Search
         </Button>
        </form>
      </div>
      
      <h1 className="text-3xl font-semibold text-center py-6">Products Lists</h1>
      {filteredData.length === 0 && <h1 className='text-3xl font-bold text-center py-6'>No Product Found!</h1>}
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-8 py-5 justify-items-center">
        {filteredData.map((item) => (
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

export default AllProducts;
