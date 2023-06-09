import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

//Context yaratılır..
const DataContext=createContext();



//Context'e sağlayıcı oluşturulur.
export const DataProvider =({children})=>{
    //Projedeki tüm state, fonskiyon vs. buraya yazılır.

//App.js'dekiler
const [kitap, setKitap] = useState([]);
const [kategori,setKategori]=useState([]);
const [secilenKategori,setSecilenKategori]=useState(0) ;

    const kitapGetir=async ()=>{
    let url="http://localhost:3005/kitaplar";
    if(secilenKategori){
      url+="?kitapKategoriId="+secilenKategori;
    }
    //const response=await fetch(url);
    const response=await axios(url);
    const data= response.data;
    setKitap(data)  ;
    // console.log  (data);
    }

    const kategoriGetir=async ()=>{
    let url="http://localhost:3005/kategoriler";
    const response=await axios(url);
    const veri=response.data;
    setKategori(veri);
    console.log(veri);
}


  const yeniKitap= async (yeni)=>{
    // setKitap([...data,yeni])
    let url="http://localhost:3005/kitaplar";
    const response = await axios.post(url,yeni);
    console.log(response);
    // setKitap(prev=>[...prev,yeni])
    kitapGetir();
    toast.success('🦄 Kitap eklendi', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }

  const kitapSil = async (id)=>{
    setKitap(prev=>prev.filter(e=>e.id!==id))
    let url=`http://localhost:3005/kitaplar/${id}`;
    const sendData={isDeleted:"true"}
    const response =await axios.patch(url,sendData);
    toast.error('🦄 Kitap silindi', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
  useEffect(()=>{
    kitapGetir()
    kategoriGetir()
  },[secilenKategori])

//Form.jsx'dekiler
const [kategoriF,setKategoriF]=useState(1);
const [kitapIsmi,setKitapIsmi]=useState("");
const [kitapYazar,setKitapYazar]=useState("");
const [kitapAciklama,setKitapAciklama]=useState("");
const [kitapResim,setKitapResim]=useState("");
const [kitapSayfa,setKitapSayfa]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    yeniKitap(
      {
      kitapAdi:kitapIsmi,
      kitapYazari: kitapYazar,
      kitapKategoriId:kategoriF,
      kitapResmi:kitapResim,
      kitapAciklama: kitapAciklama,
      kitapSayfa: kitapSayfa,
      }
    )
    setKategoriF(1);
    setKitapAciklama("");
    setKitapIsmi("");
    setKitapSayfa("");
    setKitapYazar("");
    setKitapResim("");
}




    return  <DataContext.Provider 
            value={
                {
                    yeniKitap,
                    kitapSil,
                    kitap,
                    kategori,setSecilenKategori,
                    handleSubmit,
                    kategoriF,setKategoriF,
                    kitapIsmi,setKitapIsmi,
                    kitapYazar,setKitapYazar,
                    kitapAciklama,setKitapAciklama,
                    kitapResim,setKitapResim,
                    kitapSayfa,setKitapSayfa
                }
            }>
                {children}
            </DataContext.Provider>
}

export default DataContext;