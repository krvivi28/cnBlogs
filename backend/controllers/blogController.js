const ErrorHandler = require("../../utils/error");
const Blog = require("../model/blog");

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogCount = await Blog.countDocuments();
    const data = await Blog.find({}).sort({ created: -1 });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
exports.createBlog = async (req, res, next) => {
  try {
    const data = await Blog.create({ ...req.body, image: req.file.filename });
    res.status(201).json({ success: true, blog: data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
exports.updateBlog = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const blog = await Blog.findOne({ _id });
    if (!blog) {
      return next(new ErrorHandler("blog not found", 404));
    }
    const newData = await Blog.findOneAndUpdate(
      { _id },
      { $set: { ...req.body, image: req.file.filename } },
      { new: true }
    );
    res.status(201).send(newData);
  } catch (error) {}
};
exports.deleteBlog = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const blog = await Blog.findOne({ _id });
    if (!blog) {
      return next(new ErrorHandler("blog not found", 404));
    }
    const deletedData = await Blog.deleteOne({ _id });
    res.status(201).send(deletedData);
  } catch (error) {}
};
exports.getSingleBlog = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const blog = await Blog.findOne({ _id });
    if (!blog) {
      return next(new ErrorHandler("blog not found", 404));
    }
    res.status(200).send(blog);
  } catch (error) {}
};
