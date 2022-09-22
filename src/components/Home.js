import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='homeContainer'>
        <nav>
        <h1><span>LIB</span>MS</h1>
        <div className='actions'>
          
          <Link className='navBtn' to="/form">Get Started</Link>

       
        </div>
       
        </nav>

        <main>
         
          <h1>Automate <br></br>Your <span>Library</span>  <br></br>to Fully Digital one...</h1>
          <div className='btnDiv'>
           <button className='mainBtn'> Get Started</button>
          </div>
         

        </main>
       
    </div>
  )
}

export default Home