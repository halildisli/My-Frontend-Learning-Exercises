import "./scss/app.scss";
import Navi from "./components/Navi";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  const [kitap, setKitap] = useState([]);
  const [kategori,setKategori]=useState([]);
  const [secilenKategori,setSecilenKategori]=useState(0);

  const kitapGetir=async ()=>{
    let url="http://localhost:3005/kitaplar";
    if(secilenKategori){
      url+="?kitapKategoriId="+secilenKategori;
    }
    //const response=await fetch(url);
    const response=await axios(url);
    const data= response.data;
    setKitap(data);
    // console.log(data);
  }
  // kitapGetir();

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
  }

  const kitapSil = (id)=>{
    setKitap(prev=>prev.filter(e=>e.id!==id))
  }

  //Componentler mounth edildiğinde 1 kez çalışır. (CDM)
  // useEffect(()=>{
  //   kitapGetir()
  //   kategoriGetir()
  // },[])

  useEffect(()=>{
    kitapGetir()
    kategoriGetir()
  },[secilenKategori])

  //Dependency array yazılmazsa sayfada herhangi bir değişiklik halinde sürekli çalışır. (CDM)
  // useEffect(()=>{
  //   ....
  // })

  //Dependency'de bir değişiklik olduğunda çalışır. (CDU)
  // useEffect(()=>{
  //   ....
  // },[dependency])

  //Component kaldırıldığında çalışır. (CWU)
  // useEffect(()=>{
  //   ....
  // return ()=>{component kaldırıldığında gerçekleşmesi istenen işlem}
  // },[dependency])

  return (
    <>
      <Navi setSecilenKategori={setSecilenKategori}
      kategori={kategori}/>
      <Form yeniKitap={yeniKitap}/>
      {/* <Card data={data} /> */}
      <Card data={kitap} kitapSil={kitapSil}/>
      <Footer data={kitap}/>
    </>
  );
}

export default App;
