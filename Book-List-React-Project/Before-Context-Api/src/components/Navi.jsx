import React from 'react'
import '../scss/navi.scss'

const Navi = ({kategori,setSecilenKategori}) => {
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