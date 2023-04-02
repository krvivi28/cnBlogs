const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./frontend/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/createblog").post(upload.single("avatar"), createBlog);
router.route("/updateblog/:id").put(upload.single("avatar"), updateBlog);
router.route("/deleteblog/:id").delete(deleteBlog);
router.route("/getblog/:id").get(getSingleBlog);
module.exports = router;
