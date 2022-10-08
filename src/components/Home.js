import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToFormsPage = () => {
    navigate("/form");
  };

  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <nav>
          <h1>
            <span>LIB</span>MS
          </h1>
          <div className="actions">
            <Link className="navBtn" to="/form">
              Get Started
            </Link>
          </div>
        </nav>

        <main>
          <h1>
            Automate <br></br>Your <span>Library</span> <br></br>to Fully
            Digital one...
          </h1>
          <div className="btnDiv">
            <button onClick={navigateToFormsPage} className="mainBtn">
              Get Started
            </button>
          </div>
        </main>
      </div>
      
    </div>
  );
}

export default Home;
