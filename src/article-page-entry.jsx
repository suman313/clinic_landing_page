import React from "react";
import ReactDOM from "react-dom/client";
import ArticlePage from "./components/ArticlePage";
import { articlePages } from "./articlePages";
import "./index.css";

const slug = document.body.dataset.articlePage;
const article = Object.values(articlePages).find((item) => item.slug === slug);

if (!article) {
  throw new Error(`Unknown article page: ${slug}`);
}

document.title = article.metaTitle;

const description = document.querySelector('meta[name="description"]');
if (description) {
  description.setAttribute("content", article.metaDescription);
}

const ogTitle = document.querySelector('meta[property="og:title"]');
if (ogTitle) {
  ogTitle.setAttribute("content", article.metaTitle);
}

const ogDescription = document.querySelector('meta[property="og:description"]');
if (ogDescription) {
  ogDescription.setAttribute("content", article.metaDescription);
}

const twitterTitle = document.querySelector('meta[name="twitter:title"]');
if (twitterTitle) {
  twitterTitle.setAttribute("content", article.metaTitle);
}

const twitterDescription = document.querySelector('meta[name="twitter:description"]');
if (twitterDescription) {
  twitterDescription.setAttribute("content", article.metaDescription);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticlePage article={article} />
  </React.StrictMode>,
);
