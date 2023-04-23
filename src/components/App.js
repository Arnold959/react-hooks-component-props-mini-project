import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About
        image="https://via.placeholder.com/215"
        about="About this blog"    />
      <ArticleList article={Article} />
    </div>
  );
}

export default App;
