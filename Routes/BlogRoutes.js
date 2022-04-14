// This file will contain all routes requested by blogs call and will send the request to apppropriate controller

// Imports
const express = require("express");
const dotenv = require("dotenv").config();
const {
  getSingleBlogData,
  getAllBlogData,
  deleteSingleBlogData,
  editSingleBlogData,
  addNewBlogData,
} = require("../controllers/Blogcontroller");

// Mandatory setup
const router = express.Router();

// Routes

// Get all blog(Get request) (Default route for '/api/blog')
// http://localhost:8080/api/blog
router.get("/", getAllBlogData);

// Add new blog(Post request)
// http://localhost:8080/api/blog/new
router.post("/new", addNewBlogData);

// Get single blog(Get request)
// http://localhost:8080/api/blog/:id
router.get("/:id", getSingleBlogData);

// Delete single blog(Delete request)
// http://localhost:8080/api/blog/delete/:id
router.delete("/delete/:id", deleteSingleBlogData);

// Edit single blog(Edit request)
// http://localhost:8080/api/blog/edit/:id
router.put("/edit/:id", editSingleBlogData);

// Mandatory setup
module.exports = router;
