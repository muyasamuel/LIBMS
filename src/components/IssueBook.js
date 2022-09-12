import "./IssueBook.css";

function IssueBook() {
  return (
    <div className="issueContainer">
        <div>
            <h1>Issue Book</h1>
            <h3>Note: Only one book is issued at a GO !!!</h3>
      <div className="issueWrapper">
        <form>
            <label>Students Name : 
                <input type="text" name="name"  placeholder="Students Name"/>
            </label>
            <label>Students Email : 
                <input type="email" name="email" placeholder="Students Email" />
            </label>
            <label>Book Title :
                <input type="text" name="title" placeholder="Book Title" />
            </label>
            <label>Issued Date :
                <input type="date" name="issued date" />
            </label>
            <label>Return Date :
                <input type="date" name="return date"  />
            </label>
        

        

        

        

        

        <button>Submit </button>
      </form>
        </div>
      
      </div>
      
    </div>
  );
}

export default IssueBook;
