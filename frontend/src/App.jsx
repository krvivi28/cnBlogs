import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route path="/create/" element={<CreateBlog />}></Route>
      </Routes>
    </>
  );
}

export default App;
