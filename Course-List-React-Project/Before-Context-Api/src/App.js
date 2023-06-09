import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './scss/app.scss'
import {data} from './data/data'
import { useState } from 'react';

function App() {
  const[course,setCourse]=useState(data);
  const newCourse=(newC)=>{
    // setCourse([...data,newC]);
    setCourse(prev=>[...prev,newC]);
  }
  return (
    <div className='container'>
      <Header/>
      <Form newCourse={newCourse}/>
      <Card data={course}/>
    </div>
  );
}

export default App;
