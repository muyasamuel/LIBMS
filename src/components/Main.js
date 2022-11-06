import './Main.css';
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";

function Main() {
  return (
    <div className='mainContainer'>
      <div className='quoteDivWrapper'>
          <h1><FaQuoteLeft className='quote'  /> Libraries store the energy that fuels the imagination. They open up windows <br/> for the world and inspire as to expore and achieve , <br/>  and contribute to improving the quality of life <FaQuoteRight className='quote' /></h1>
      </div>
    </div>
  )
}

export default Main;