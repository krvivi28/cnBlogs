import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ title: "", description: "" });
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.title === "" || data.description === "") {
      window.alert("all input fields are required");
    }
    let formData = new FormData();
    formData.append("title", data.title); //append the values with key, value pair
    formData.append("description", data.description);
    formData.append("avatar", image);
    console.log(formData);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const res = await axios.post(
        "/api/codingninja/createblog",
        formData,
        config
      );
      console.log(res.status);
      if (res.status === 201) {
        window.alert("created");
        setData({ title: "", description: "" });
        setImage("");
        navigate("/");
      }
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <>
      <div className="min-h-[92vh] w-full  bg-[#111216]">
        <form
          encType="multipart/form-data"
          className="form p-4 w-full md:w-[60%] mx-auto text-lg flex shadow-md text-white shadow-blue-500/50 flex-col items-center gap-10 bg-transparent"
        >
          <h1 className="text-blue-500 text-3xl font-bold">Create Blog</h1>
          <input
            className="w-full placeholder-gray-500 bg-transparent outline-none border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
            type="text"
            name="title"
            placeholder="enter your title"
            onChange={handleChange}
            value={data.title}
          />
          <textarea
            className="w-full placeholder-gray-500 bg-transparent outline-none  border-b-2 hover:border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
            name="description"
            placeholder="enter your description"
            onChange={handleChange}
            value={data.description}
          />
          <input
            className="w-full placeholder-gray-500 bg-transparent outline-none border-b-2 hover:border-b-2 duration-300 border-blue-500 hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5"
            id="file_input"
            type="file"
            name="avatar"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            Upload Blog Image : SVG, PNG, JPG.
          </p>

          <button
            onClick={handleSubmit}
            className="w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br shadow-sm shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
