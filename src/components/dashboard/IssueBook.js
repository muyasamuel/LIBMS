import "./IssueBook.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { toast, Toaster } from "react-hot-toast";

function IssueBook() {
  const defaultFormState = {
    student_name: { value: "", error: null },
    student_email: { value: "", error: null },
    title: { value: "", error: null },
  };



  const [formState, setFormState] = useState(defaultFormState);
  const [issueDate, setIssueDate] = useState();
  const [returnDate, setReturnDate] = useState();

  const onChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: {
        value: value,
        error: null,
      },
    });
  };


  
  const formatIssueDate = moment(issueDate).toISOString();
  const formatReturnDate = moment(returnDate).toISOString();



  const submitHandler = (e) => {
    e.preventDefault();
    let hasErrors = handleFormValidations();

    if (hasErrors) {
      return;
    }

    let updatedState = { ...formState };
    const { student_name, student_email, title } = updatedState;


    const issueData = {
      student_name: student_name.value,
      student_email: student_email.value,
      title: title.value,
      issue_date: formatIssueDate,
      return_date: formatReturnDate,
    };

    axios({
      method: "post",
      url: "http://localhost:8000/api/books/issue-book/",
      data: issueData,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log("succcesfully");
          toast.success('Successfully Added');
        }
      })
      .catch((err) => {
        console.log(err.response);
      });

      setFormState(defaultFormState);
      setIssueDate(null);
      setReturnDate(null);
  };


  const handleFormValidations = () => {
    let updatedState = { ...formState };
    let error = false;

    const { student_name, student_email, title } = updatedState;

    if (student_name.value?.length < 3) {
      error = true;
      updatedState.student_name.error =
        " Name cannot be less than 3 characters";
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!student_email?.value?.match(re)) {
      error = true;
      updatedState.student_email.error = "Email address is invalid";
    }

    if (title.value?.length < 3) {
      error = true;
      updatedState.title.error = "Please put in a Title";
    }

    setFormState({
      ...formState,
      ...updatedState,
    });
    return error;
  };



  return (
    <>
    <Navbar />
    <div className="issueContainer">
       <Toaster />
      <div>
        <h1>Issue Book</h1>
        <h3>Note: Only one book is issued at a GO !!!</h3>
        <div className="issueWrapper">
          <form onSubmit={submitHandler}>
            <div>
              <label>
                Students Name :
                <input
                  type="text"
                  name="student_name"
                  placeholder="Students Name"
                  value={formState?.student_name?.value}
                  onChange={(e) =>
                    onChangeHandler("student_name", e.target.value)
                  }
                />
              </label>
              {formState?.student_name?.error && (
                <small className="error">{formState.student_name.error}</small>
              )}
            </div>
            <div>
              <label>
                Students Email :
                <input
                  type="email"
                  name="student_email"
                  placeholder="Students Email"
                  value={formState?.student_email?.value}
                  onChange={(e) =>
                    onChangeHandler("student_email", e.target.value)
                  }
                />
              </label>
              {formState?.student_email?.error && (
                <small className="error">{formState.student_email.error}</small>
              )}
            </div>
            <div>
              <label>
                Book Title :
                <input
                  type="text"
                  name="title"
                  placeholder="Book Title"
                  value={formState?.title?.value}
                  onChange={(e) => onChangeHandler("title", e.target.value)}
                />
              </label>
              {formState?.title?.error && (
                <small className="error">{formState.title.error}</small>
              )}
            </div>
            <div>
              <label>
                Issued Date :
                <DatePicker
                  showTimeSelect
                  dateFormat=" yyyy MMMM d,  h:mmaa"
                  selected={issueDate}
                  onChange={(date) => setIssueDate(date)}
                />
              </label>
            </div>
            <div>
              <label>
                Return Date :
                <DatePicker
                  showTimeSelect
                  dateFormat=" yyyy MMMM d,  h:mmaa"
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                />
              </label>
            </div>

            <button className="issueWrapperBtn ">Submit </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default IssueBook;
