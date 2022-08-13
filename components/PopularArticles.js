import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
 
const PopularArtices = ({ blok }) => {
  return (
    <>
      <div
        className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        {...storyblokEditable(blok)}
      >
        {blok.articles.map((article) => {
          article.content.slug = article.slug
          return (
            <ArticleTeaser article={article.content} key={article.uuid} />
          )
        })}
      </div>
    </>
  );
};

export default PopularArtices;