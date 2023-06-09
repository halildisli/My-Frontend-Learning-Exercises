import React, { useContext, useState } from 'react'
import '../scss/form.scss'
import DataContext from '../context/dataContext'

const Form = () => {

  const {
    handleSubmit,
    kategoriF,setKategoriF,
    kitapIsmi,setKitapIsmi,
    kitapYazar,setKitapYazar,
    kitapAciklama,setKitapAciklama,
    kitapResim,setKitapResim,
    kitapSayfa,setKitapSayfa
  }=useContext(DataContext);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Yeni Kitap Ekle / Düzenle</h3>
      <select value={kategoriF} onChange={(e)=>{setKategoriF(e.target.value)}} >
        <option value={1}>Software</option>
        <option value={2}>Macera</option>
        <option value={3}>Romantik</option>
        <option value={4}>Edebiyat</option>
        <option value={5}>Bilim</option>
      </select>
      <input value={kitapIsmi} onChange={(e)=>{setKitapIsmi(e.target.value)}} type='text' placeholder='kitap ismi'></input>
      <input value={kitapYazar} onChange={(e)=>{setKitapYazar(e.target.value)}} type='text' placeholder='kitap yazarı'></input>
      <input value={kitapAciklama} onChange={(e)=>{setKitapAciklama(e.target.value)}} type='text' placeholder='kitap açıklaması'></input>
      <input value={kitapResim} onChange={(e)=>{setKitapResim(e.target.value)}} type='text' placeholder='kitap resmi'></input>
      <input value={kitapSayfa} onChange={(e)=>{setKitapSayfa(e.target.value)}} type='number' placeholder='kitap sayfa sayısı'></input>
      <input type='submit' value={"Kitap Ekle"}></input>
    </form>
  )
}

export default Form