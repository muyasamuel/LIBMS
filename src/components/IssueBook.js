import { useForm } from "react-hook-form";
import "./IssueBook.css";

function IssueBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="issueContainer">
      <div>
        <h1>Issue Book</h1>
        <h3>Note: Only one book is issued at a GO !!!</h3>
        <div className="issueWrapper">
          <form onSubmit={handleSubmit(submitHandler)}>
            <label>
              Students Name :
              <input
                type="text"
                name="name"
                placeholder="Students Name"
                {...register("name", { required: true, maxLength: 7 })}
              />
              {errors.name && <p> Please check on the inputed name</p>}
            </label>
            <label>
              Students Email :
              <input
                type="email"
                name="email"
                placeholder="Students Email"
                {...register("email", {
                  required: true,
                  
                })}
              
              />
              {errors.email && <p>Please put n a valid email</p>}
            </label>
            <label>
              Book Title :
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                {...register("title", { required: true })}
               
              />
              {errors.title && <p> Please fill in the book title</p>}
            </label>
            <label>
              Issued Date :
              <input type="date" name="issued date" {...register("issuedDate" , { required: true})} />
              {errors.issuedDate && <p> Please put in a date</p>}
            </label>
            <label>
              Return Date :
              <input type="date" name="return date" {...register("returnDate" , {required: true})} />
              {errors.issuedDate && <p> Please put in a date</p>}
            </label>

            <button>Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueBook;
