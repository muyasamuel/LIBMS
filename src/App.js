import { Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import SearchFilter from './components/SearchFilter';
import IssuedBooks from './components/IssuedBooks';
import Contents from './components/Contents'




function App() {
  return ( 
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    
  
    <SearchFilter />
    <IssuedBooks />
    <Contents />
     
     
    
      
    
    
    </div>
  );
}

export default App;
