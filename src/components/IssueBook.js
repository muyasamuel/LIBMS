import React from "react";

function IssueBook() {
  return (
    <div>
      <h1>Issue Book</h1>
      <h3> Only one book is issued at a Go</h3>
      <form>
        <label>
          Students Name:
          <input type="text" name="name" />
        </label>
        <label>
          Students Email:
          <input type="email" name="email" />
        </label>
        <label>
          Book Title:
          <input type="text" name="title" />
        </label>

        <label>
          Issued Date:
          <input type="date" name="issued date" />
        </label>
        <label>
          Return Date:
          <input type="date" name="return date" />
        </label>
        <button> Submit </button>
       
       
      </form>
    </div>
  );
}

export default IssueBook;
