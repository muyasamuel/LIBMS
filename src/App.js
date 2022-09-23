import { Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import Contents from './components/Contents'





function App() {
  return ( 
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="contents" element={<Contents />} />
      </Routes>
    
  
     
     
    
      
    
    
    </div>
  );
}

export default App;
