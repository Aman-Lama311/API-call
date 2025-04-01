import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShimmerThumbnail, ShimmerTitle, ShimmerText } from 'react-shimmer-effects';

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const { productId } = useParams();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [productId]);

  if (load) {
    return (
      <div className="px-8 py-6 flex justify-center items-center flex-col xl:flex-row">
        <div className="w-2/3">
          <ShimmerThumbnail height={300} width={280} />
        </div>
        <div className="max-w-3xl space-y-4">
          <ShimmerTitle line={1} />
          <ShimmerText line={2} />
          <ShimmerText line={1} />
          <ShimmerText line={1} />
        </div>
      </div>
    );
  }

  if (!data) {
    return <h1>No product found</h1>;
  }

  return (
    <div className="px-8 py-6 flex justify-center items-center flex-col xl:flex-row">
      <div className="w-2/3">
        <img src={data.image} alt={data.title} className="w-64 mx-auto" />
      </div>
      <div className="max-w-3xl">
        <h1 className="text-2xl font-semibold mt-4">{data.title}</h1>
        <h2 className="text-xl font-medium mt-2">{data.category}</h2>
        <p className="mt-4 text-xl font-bold">${data.price}</p>
        <p className="mt-4 text-lg font-semibold">⭐{data.rating.rate}</p>
        <p className="text-gray-700 mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
