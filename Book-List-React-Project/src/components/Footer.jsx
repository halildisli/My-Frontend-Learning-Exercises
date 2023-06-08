import React from 'react'
import '../scss/footer.scss'

const Footer = ({data}) => {
  return (
    <footer>
      {
        data.map((item)=>
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