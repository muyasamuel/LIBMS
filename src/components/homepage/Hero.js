import "./Hero.css";
import { FaAdn, FaSearch, FaBoxTissue, FaClone } from "react-icons/fa";

function Hero() {
  return (
    <div className="heroContainer">
      <h1> Libms Services </h1>
      <div className="heroWrapper">
        <div className="heroDiv">
          <FaAdn className="heroIcon" />
          <h2> Add books</h2>
          <p>
            Here you are given the privilege to add new book that never existed
            before
          </p>
        </div>
        <div className="heroDiv">
          <FaSearch className="heroIcon" />
          <h2> Search Books</h2>
          <p>
            Search for whatever book that you think its available and given an
            option of editing or deleting respective books
          </p>
        </div>
        <div className="heroDiv">
          <FaBoxTissue className="heroIcon" />
          <h2> Issue Book</h2>
          <p>
            Whenever a book is issued to a student all relevant details are
            noted done against the book issued
          </p>
        </div>
        <div className="heroDiv">
          <FaClone className="heroIcon" />
          <h2> Issued Books</h2>
          <p>A list of all issued books with the student details</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
