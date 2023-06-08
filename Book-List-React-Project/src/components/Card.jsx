import React from 'react'
import '../scss/card.scss'


const Card = ({data,kitapSil}) => {
  return (
    <div className='card-container'>
      {
        data.map((kitap)=>{
          return(
        <div className="card" key={kitap.id}>
          <button onClick={()=>kitapSil(kitap.id)}
          className='delete' title='Kaldır'>X</button>
          <img src={kitap.kitapResmi} alt="resim" />
          <div className="card-body">
            <p>Kitap Adı : {kitap.kitapAdi}</p>
            <p>Kitap Yazarı : {kitap.kitapYazari}</p>
            {/* <p>Kitap Kategorisi : {kitap.kitapKategori}</p> */}
            <p>Kitap Sayfa : {kitap.kitapSayfa}</p>
            <p>
              Kitap Açıklaması: {kitap.kitapAciklama}
            </p>

          </div>
        </div>
        )})
      }
        
    </div>
  )
}

export default Card