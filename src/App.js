import { Routes, Route } from "react-router-dom";
import './App.css';
import Contents from './components/dashboard/Contents';
import IssueBook from './components/dashboard/IssueBook';
import SearchFilter from './components/dashboard/SearchFilter';
import IssuedBooks from './components/dashboard/IssuedBooks';
import AddBook from "./components/dashboard/AddBook";
import Home from "./components/homepage/Home";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";








function App() {
  return ( 
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="contents" element={<Contents />} />
        <Route path="contents/addbook" element={<AddBook/>} />
        <Route path="contents/issuebook" element={<IssueBook/>} />
        <Route path="contents/edit" element={<SearchFilter />} />
        <Route path="contents/issuedbooks" element={<IssuedBooks />} />
        
      </Routes>
    
  
     
     
    
      
    
    
    </div>
  );
}

export default App;
