import axios from 'axios';
import React, { useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setData(response.data);
    } catch {
      console.log('Error fetching data');
    } finally {
      setLoad(false);
    }
  };

  const handleMeals = () => {
    fetchData();
  };

  return (
    <div className="w-full h-screen p-10">
      <button
        onClick={handleMeals}
        className="bg-purple-500 px-5 py-2 rounded mb-4 cursor-pointer active:scale-95 transition-all text-white"
      >
        Show Meals
      </button>

      {load && <h1>Loading...</h1>}

      {data &&
        data.meals.map((item) => (
          <div className="w-[300px] p-4 border rounded" key={item.idMeal}>
            <img className='cursor-pointer hover:scale-105 transition-all rounded-t-md' src={item.strMealThumb} alt={item.strMeal} />
            <h1 className='text-lg font-semibold mt-4'>{item.strCategory}</h1>
            <p className="line-clamp-3">{item.strInstructions}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
