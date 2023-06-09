import React, { useContext } from 'react'
import '../scss/navi.scss'
import DataContext from '../context/dataContext'

const Navi = () => {
  const {kategori,setSecilenKategori}=useContext(DataContext)
  return (
    <nav>
      <h3>Bilge Adam Kitaplık</h3>
      <ul>
        {
          kategori.map((item)=>
            <li key={item.kategoriId}>
              <span onClick={()=>setSecilenKategori(item.kategoriId)}>{item.kategoriAdi}</span>
            </li>

          )
        }
      </ul>
    </nav>
  )
}

export default Navi