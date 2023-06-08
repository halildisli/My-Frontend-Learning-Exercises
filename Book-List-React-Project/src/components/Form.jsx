import React, { useState } from 'react'
import '../scss/form.scss'

const Form = ({yeniKitap}) => {
  // const[deger,setDeger]=useState(initialValue)
  const [kategori,setKategori]=useState(1);
  const [kitapIsmi,setKitapIsmi]=useState("");
  const [kitapYazar,setKitapYazar]=useState("");
  const [kitapAciklama,setKitapAciklama]=useState("");
  const [kitapResim,setKitapResim]=useState("");
  const [kitapSayfa,setKitapSayfa]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    yeniKitap(
      {
      // id: Math.round(Math.random()*100), // Json Server Otomatik sırasına göre id atar.
      kitapAdi:kitapIsmi,
      kitapYazari: kitapYazar,
      kitapKategori:kategori,
      kitapResmi:kitapResim,
      kitapAciklama: kitapAciklama,
      kitapSayfa: kitapSayfa,
      }
    )
    setKategori(1);
    setKitapAciklama("");
    setKitapIsmi("");
    setKitapSayfa("");
    setKitapYazar("");
    setKitapResim("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Yeni Kitap Ekle / Düzenle</h3>
      <select value={kategori} onChange={(e)=>{setKategori(e.target.value)}} >
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