import { Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Home from './components/Home';





function App() {
  return ( 
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    
  
     
     
    
      
    
    
    </div>
  );
}

export default App;
