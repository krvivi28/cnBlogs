import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const BlogDetails = () => {
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const [userInp, setUserInp] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState("");
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const blogDetails = async () => {
      const res = await axios.get(`/api/codingninja/getblog/${id}`);
      setData(res.data);
    };
    blogDetails();
  }, [edit]);

  const handleDelete = async () => {
    try {
      let ans = window.confirm("are you sure?");
      if (!ans) {
        return;
      }
      setDel(true);
      const res = await axios.delete(`/api/codingninja/deleteblog/${id}`);
      //   console.log(res.status);
      //   console.log(res.data);
      if (res.status === 201) {
        setDel(false);
        navigate("/");
      }
    } catch (error) {
      setDel(false);
      window.alert(error);
    }
  };
  const handleEdit = async () => {
    setEdit(true);
    // window.alert("edit clicked");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setUserInp({ ...userInp, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.title === "" || data.description === "") {
      window.alert("all input fields are required");
    }
    let formData = new FormData();
    formData.append("title", userInp.title); //append the values with key, value pair
    formData.append("description", userInp.description);
    formData.append("avatar", image);
    console.log(formData);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const res = await axios.put(
        `/api/codingninja/updateblog/${data._id}`,
        formData,
        config
      );
      console.log(res.status);
      if (res.status === 201) {
        window.alert("updated");
        navigate(`/blog/${id}`);
        setUserInp({ title: "", description: "" });
        setImage("");
        setEdit(false);
      }
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <>
      <div className="min-h-[92vh] blog flex-col md:flex-row flex p-5 bg-[#111216] overflow-hidden">
        {edit ? (
          <div className="form relative w-full md:w-[70%] mx-auto text-lg flex shadow-sm text-white shadow-blue-500 flex-col items-center justify-center gap-5 p-10 bg-transparent">
            <h1 className="text-blue-500 text-3xl font-bold ">Update Blog</h1>
            <form
              encType="multipart/form-data"
              action=""
              className="w-full  gap-10 flex flex-col justify-center"
            >
              <input
                name="title"
                className=" placeholder-gray-500 bg-transparent outline-none  border-b-2 hover:border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
                type="text"
                placeholder="enter your new title"
                value={userInp.title}
                onChange={handleChange}
              />
              <textarea
                name="description"
                className=" mt-3 placeholder-gray-500 bg-transparent outline-none  border-b-2 hover:border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
                type="text"
                placeholder="enter your new desc"
                value={userInp.description}
                onChange={handleChange}
              />
              <input
                className=" mt-3 placeholder-gray-500 bg-transparent outline-none  border-b-2 hover:border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
                type="file"
                placeholder="enter your new desc"
                name="avatar"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />

              <button
                onClick={handleSubmit}
                className=" mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        ) : (
          <div className="left w-full p-5 shadow-md shadow-blue-500/40 rounded-md flex flex-col md:flex-row items-center justify-center">
            <div className="left w-full md:w-1/2 flex flex-col items-center justify-center">
              <div className="title text-center text-3xl font-bold font-sans text-white mt-5">
                {data.title}
              </div>
              <div className="description text-white text-center flex items-center justify-center space-x-2 font-xl">
                {data.description}
              </div>
            </div>
            <div className="right w-full md:w-1/2 flex flex-col items-center justify-between">
              <div className="img flex items-center justify-center h-1/2">
                <img
                  className="rounded-md w-[400px]"
                  src={`http://localhost:3000/uploads/${data.image}`}
                  alt={data.image}
                />
              </div>{" "}
              <div className="right flex gap-2 flex-col items-center justify-center p-4 w-[70%]">
                <button
                  onClick={() => {
                    handleEdit();
                  }}
                  className="w-full text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br shadow-green-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Update Blog
                </button>
                <div
                  onClick={() => {
                    handleDelete();
                  }}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {del ? (
                    <CircularProgress className="text-sm" color="inherit" />
                  ) : (
                    "Delete Blog"
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default BlogDetails;
