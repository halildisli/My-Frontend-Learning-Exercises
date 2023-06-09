import React, { useContext } from 'react'
import '../scss/footer.scss'
import DataContext from '../context/dataContext'

const Footer = () => {
  const{kitap}=useContext(DataContext)
  return (
    <footer>
      {
        kitap.map((item)=>
        <>
          <a href="#">{item.kitapAdi}</a>
          <span >📚</span>
        </>
        )
      }
    </footer>
  )
}

export default Footer