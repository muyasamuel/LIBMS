import './Home.css';


function Home() {
  return (
    <div className='homeContainer'>
        <nav>
        <h1><span>LIB</span>MS</h1>
        <div className='actions'>
          <button className='navBtn'>Get Started</button>
       
        </div>
       
        </nav>

        <main>
         
          <h1>Automate <br></br>Your <span>library</span>  <br></br>to Fully Digital one...</h1>
          <div className='btnDiv'>
           <button className='mainBtn'> Get Started</button>
          </div>
         

        </main>
       
    </div>
  )
}

export default Home