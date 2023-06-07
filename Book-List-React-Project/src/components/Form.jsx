import React, { useState } from 'react'
import '../scss/form.scss'

const Form = ({yeniKitap}) => {
  // const[deger,setDeger]=useState(initialValue)
  const [kategori,setKategori]=useState("Software");
  const [kitapIsmi,setKitapIsmi]=useState("");
  const [kitapYazar,setKitapYazar]=useState("");
  const [kitapAciklama,setKitapAciklama]=useState("");
  const [kitapResim,setKitapResim]=useState("");
  const [kitapSayfa,setKitapSayfa]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    yeniKitap(
      {
      id: Math.round(Math.random()*100),
      kitapAdi:kitapIsmi,
      kitapYazari: kitapYazar,
      kitapKategori:kategori,
      kitapResmi:kitapResim,
      kitapAciklama: kitapAciklama,
      kitapSayfa: kitapSayfa,
      }
    )
    setKategori("Software");
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
        <option>Software</option>
        <option>Macera</option>
        <option>Romantik</option>
        <option>Edebiyat</option>
        <option>Bilim</option>
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