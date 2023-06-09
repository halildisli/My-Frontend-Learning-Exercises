import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './scss/app.scss'

import { DataProvider } from './context/dataContext';

function App() {
  

  return (
    <DataProvider>
      <Header/>
      <Form/>
      <Card/>
    </DataProvider>
  );
}

export default App;
