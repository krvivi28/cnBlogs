import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import Bcard from "../components/Bcard";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/api/codingninja/blogs");
        setBlogs(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);
  const handleClick = (id) => {
    navigate(`/blog/${id}`);
    // window.alert(id, "clicked");
  };
  return (
    <>
      {loading && <LinearProgress color="inherit" />}
      <Hero />
      <div className="blogs min-h-[283px] flex flex-col items-center justify-center bg-zinc-900 gap-3 p-5">
        {blogs.map((blog) => {
          return (
            <Bcard
              id={blog._id}
              key={blog._id}
              img={blog.image}
              title={blog.title}
              des={blog.description}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
