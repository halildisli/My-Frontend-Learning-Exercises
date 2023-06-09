import "./scss/app.scss";
import Navi from "./components/Navi";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { DataProvider } from "./context/dataContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <DataProvider>
      <ToastContainer/>
      <Navi />
      <Form/>
      <Card/>
      <Footer/>
    </DataProvider>
  );
}

export default App;
