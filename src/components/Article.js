import React from "react";


function Article(props) {
    return (
      <Article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>
      </Article>
    );
  }

  export default Article;