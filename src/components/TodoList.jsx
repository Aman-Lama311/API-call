import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const TodoList = () => {
const [data, setData] = useState([]);
const [load, setLoad] = useState(false);
const fetched = useRef(false)

const getData = async () => {
  if(fetched.current) return;
  fetched.current = true;
  setLoad(true);
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
  }catch {
    console.log('Error')
  }finally {
    setLoad(false);
  }
};

useEffect(() => {
  getData();
},[])

if(load) {
  return <h1>Loading...</h1>
}

  return (
    <div>
      {data && data.map((item) => (
        <div className='px-4 py-2 border' key={item.id}>
          <h1 className='font-semibold text-lg'>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoList
