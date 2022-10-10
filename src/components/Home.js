import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const navigateToFormsPage = () => {
    navigate("/form");
  };

  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <nav>
          <motion.h1
          initial={{x:-150, opacity:0}}
          animate={{x: 0 , opacity: 1}}
          transition={{duration: 1.2}}
          >
            <span>LIB</span>MS
          </motion.h1>



          <motion.div 
            initial={{x: 150, opacity:0}}
            animate={{x: 0 , opacity: 1}}
            transition={{duration: 1.2}}
          
          className="actions">
            <Link className="navBtn" to="/form">
              Get Started
            </Link>
          </motion.div>
        </nav>

        <motion.main
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5, delay: 0.6}}
        viewport={{once: true}}
        
        >
          <h1>
            Automate <br></br>Your <span>Library</span> <br></br>to Fully
            Digital one...
          </h1>
          <div className="btnDiv">
            <button onClick={navigateToFormsPage} className="mainBtn">
              Get Started
            </button>
          </div>
        </motion.main>
      </div>
      
    </div>
  );
}

export default Home;
