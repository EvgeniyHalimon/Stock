import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Directory} from './components/Directory';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChooseSymbol from './components/ChooseSymbol';

function App() {
  return (
      <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/*"  element={<ChooseSymbol/>}/>
            <Route path="/companies" element={<Directory/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
