import React from "react";

function ArticleList(props) {
    const articleArray = props.article.map((article) => (
      <article
        key={article.id}
        title={article.title}
        date={article.date || "Deceber 15, 2020"}
        preview={article.preview}
      />
    ));
  
    return <main>{articleArray}</main>;
  }

  export default ArticleList;