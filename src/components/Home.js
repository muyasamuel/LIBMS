import "./Home.css";
import {  Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <nav>
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span>LIB</span>MS
          </motion.h1>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="actions"
          >
            <Link className="navBtn" to="/signup">
              Get Started
            </Link>
          </motion.div>
        </nav>

        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>
            Automate <br></br>Your <span>Library</span> <br></br>to Fully
            Digital one...
          </h1>
          <div className="btnDiv">
            <button onClick={navigateToSignUpPage} className="mainBtn">
              Get Started
            </button>
          </div>
        </motion.main>
      </div>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
