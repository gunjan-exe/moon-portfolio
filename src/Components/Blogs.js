import React, { useState } from "react";
import "./blogs.css";
import blogsData from "./BlogData";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeBlog, setActiveBlog] = useState(null); // State for the currently opened blog

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); //???????learn
  };

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesTitle = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesKeywords = blog.keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesCategory =
      !selectedCategory || blog.keywords.includes(selectedCategory);
    return (matchesTitle || matchesKeywords) && matchesCategory;
  });

  const categories = Array.from(
    new Set(blogsData.flatMap((blog) => blog.keywords))
  );

  return (
    <div className="blogs-container">
      {/* Sidebar */}
      <div className="blogs-sidebar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearch}
          className="blogs-search-bar"
        />
        <div className="blogs-categories">
          <h4>Categories</h4>
          <button
            onClick={() => setSelectedCategory("")}
            className={!selectedCategory ? "active" : ""}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="blogs-list">
        {activeBlog ? (
          <div className="blog-details">
            <button className="back-button" onClick={() => setActiveBlog(null)}>
              &larr; Back
            </button>
            <h2>{activeBlog.title}</h2>
            <p className="blog-scrollable-content">{activeBlog.content}</p>
          </div>
        ) : (
          <>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="blog-item"
                  onClick={() => setActiveBlog(blog)} // Set the active blog
                >
                  <div className="blog-thumbnail"></div>
                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <div className="blog-keywords">
                      {blog.keywords.map((keyword) => (
                        <span key={keyword} className="keyword">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-blogs-message">No blogs found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
