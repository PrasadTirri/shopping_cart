import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3  blog-card">
      <img className="blog-img" src="/images/blog-1.jpg" alt="" />
      <div>
        <p>12/12/22</p>
        <h5>A beautiful saturday morning</h5>
        <p>a paragraph</p>
        <Link to="/">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
