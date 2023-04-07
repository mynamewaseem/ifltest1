import './App.css';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Product } from './Components/Product';
import { News } from './Components/News';
import { Contact } from './Components/Contact';
import "./Components/common.css"

function App() {
  return (
    
      <div>
        <BrowserRouter  >
            <Nav  />
           <Routes  >
              <Route path='/' element={<Home/>}  />
              <Route path='/Product' element={<Product/>} />
              <Route path='/News' element={<News/>} />
              <Route path='/Contact' element={<Contact/>} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
