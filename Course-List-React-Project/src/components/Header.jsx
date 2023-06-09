import React, { useContext } from 'react'
import '../scss/header.scss'
import DataContext from '../context/dataContext'

const Header = () => {
  const{category,setSelectedCategory}=useContext(DataContext);
  return (
    <header>
        <h2>Bilge Adam Course List</h2>
        <nav>
          <ul>
            {
              category.map((item)=>
                <li key={item.id}>
                  <span onClick={()=>setSelectedCategory(item.id)}>{item.categoryName}</span>
                </li>
              )
            }
          </ul>
        </nav>
    </header>
  )
}

export default Header