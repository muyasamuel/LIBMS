import "./AddBook.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const submitHandler = (data) => {
    axios({
      method: "post",
      url: `${baseUrl}/api/books/book-list/`,
      data: data,
    }).then((response) => {
      if (response.status === 201) {
        toast.success("Successfully Added");
      }
    });

    reset();
  };

  
  return (
    <>
      <Navbar />
      <div className="addContainer">
        <Toaster />
        <div className="addWrapper">
          <h2>Add New Book</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Book title "
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p style={{ color: "red" }}> Please input a title</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="author"
                placeholder="Authors Name "
                {...register("author", { required: true })}
              />
              {errors.author && (
                <p style={{ color: "red" }}> Please add an Authors Name</p>
              )}
            </div>
            <div>
              <input
                type="number"
                name="amount"
                placeholder="Amount "
                {...register("amount", { required: true, max: 100, min: 1 })}
              />
              {errors.amount && (
                <p style={{ color: "red" }}>Please a valid amount </p>
              )}
            </div>

            <label htmlFor="category ">Select category:</label>
            <select
              name="book_category"
              id="books"
              defaultValue={""}
              {...register("book_category", { required: true })}
            >
              <option value="" disabled>
                Choose here
              </option>
              <option value="Novel">Novel</option>
              <option value="Revision">Revision Work</option>
              <option value="Course">Course Work </option>
            </select>
            {errors.category && (
              <p style={{ color: "red" }}>Please feed in a category </p>
            )}

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
