import "./scss/app.scss";
import Navi from "./components/Navi";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import {data} from "./data/data";
import { useState } from "react";

function App() {
  
  const [kitap, setKitap] = useState(data);
  const yeniKitap=(yeni)=>{
    // setKitap([...data,yeni])
    setKitap(prev=>[...prev,yeni])
  }
  return (
    <>
      <Navi />
      <Form yeniKitap={yeniKitap}/>
      {/* <Card data={data} /> */}
      <Card data={kitap} />
      <Footer />
    </>
  );
}

export default App;
