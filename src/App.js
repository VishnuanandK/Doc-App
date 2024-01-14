import { Route, Routes } from 'react-router-dom';
import './App.css';
import Docs from './Components/Docs';
import { app, database } from './firebaseConfig';
import EditDocs from './Components/EditDocs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Docs database={database}/>} />
        <Route path='/editDocs/:id' element={<EditDocs database={database}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
