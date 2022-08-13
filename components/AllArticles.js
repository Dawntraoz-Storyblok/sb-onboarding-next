import ArticleTeaser from "./ArticleTeaser";

import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories?starts_with=blog/`, { version: 'draft' });
      const filteredArticles = data.stories.filter((article) => article.name != "Blog");
      
      setArticles((prev) => filteredArticles.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
  }, []);

  return (
    <>
      <p className="text-3xl text-center py-6">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        { articles[0] && articles.map((article) => (
          <ArticleTeaser article={article.content} key={article.uuid} />
        ))}
      </div>
    </>
  );
};
export default AllArticles;