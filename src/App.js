import { Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';

import Contents from './components/Contents';
import AddBook from './components/AddBook';
import IssueBook from './components/IssueBook';
import SearchFilter from './components/SearchFilter';
import IssuedBooks from './components/IssuedBooks';
import EditModal from "./components/EditModal";






function App() {
  return ( 
    <div className="App">
       <Routes>
        <Route path="/" element={<EditModal />} />
        <Route path="form" element={<Form />} />
        <Route path="contents" element={<Contents />} />
        <Route path="contents/addbook" element={<AddBook />} />
        <Route path="contents/issuebook" element={<IssueBook/>} />
        <Route path="contents/edit" element={<SearchFilter />} />
        <Route path="contents/issuedbooks" element={<IssuedBooks />} />
        
      </Routes>
    
  
     
     
    
      
    
    
    </div>
  );
}

export default App;
