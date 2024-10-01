import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Head from './Components/Head';


function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);
  function handleClick() {
    if (item !== "") {
      setItemArr([...itemArr, item]);
      console.log(itemArr);
      setItem("");
    }
  };
  const onDelete = (key) => {
    const arr = itemArr.filter((value, index, setItemArr) => {
      return index !== key;
    });
    setItemArr(arr);
  }
  const getData = (data, key)=>{
    setItemArr(itemArr.map((value, index)=>{
      return key===index && data !== ""? data:value;
    }));
  };
  return (<div className='mainContainer'>
    <Head />
    <div className='entryContainer'>
      <input
        type='text'
        name='entry'
        id='entry'
        placeholder='Add an item'
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
    <div className='body'>
      {itemArr.map((value, index) => (
        <Card entry={value} 
              key={index} 
              delete={() => { onDelete(index) }} 
              getData = {getData} 
              index = {index}/>
      ))}
    </div>
  </div>
  );
}


export default App;