import "./IssueBook.css";

function IssueBook() {
  return (
    <div className="issueContainer">
      {/* <h1>Issue Book</h1> */}
      <div className="issueWrapper">
        <form>
        <input type="text" name="name"  placeholder="Students Name"/>

        <input type="email" name="email" placeholder="Students Email" />

        <input type="text" name="title" placeholder="Book Title" />

        <input type="date" name="issued date" />

        <input type="date" name="return date"  />

        <button>Submit </button>
      </form>
      </div>
      
    </div>
  );
}

export default IssueBook;
