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
            <div>
              <label>
              Students Name :
              <input
                type="text"
                name="name"
                placeholder="Students Name"
                {...register("name", { required: true, maxLength: 7 })}
              />
              
            </label>
            {errors.name && <p style={{color: 'red'}}> Please check on the inputed name</p>}
            </div>
            <div>
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
            
            </label>
            {errors.email && <p style={{color: 'red'}}>Please put n a valid email</p>}
            </div>
            <div>
               <label>
              Book Title :
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                {...register("title", { required: true })}
               
              />
              
            </label>
            {errors.title && <p style={{color: 'red'}}> Please fill in the book title</p>}
            </div>
           <div>
             <label>
              Issued Date :
              <input type="date" name="issued date" {...register("issuedDate" , { required: true})} />
             
            </label>
            {errors.issuedDate && <p style={{color: 'red'}}> Please put in a date</p>}
           </div>
           <div>
             <label>
              Return Date :
              <input type="date" name="return date" {...register("returnDate" , {required: true})} />
              
            </label>
            {errors.issuedDate && <p style={{color: 'red'}}> Please put in a date</p>}

           </div>
           
            <button>Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueBook;
