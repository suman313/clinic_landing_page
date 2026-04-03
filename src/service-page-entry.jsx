import React from "react";
import ReactDOM from "react-dom/client";
import ServicePage from "./components/ServicePage";
import { servicePages } from "./servicePages";
import "./index.css";

const slug = document.body.dataset.servicePage;
const page = Object.values(servicePages).find((item) => item.slug === slug);

if (!page) {
  throw new Error(`Unknown service page: ${slug}`);
}

document.title = page.metaTitle;

const description = document.querySelector('meta[name="description"]');
if (description) {
  description.setAttribute("content", page.metaDescription);
}

const ogTitle = document.querySelector('meta[property="og:title"]');
if (ogTitle) {
  ogTitle.setAttribute("content", page.metaTitle);
}

const ogDescription = document.querySelector('meta[property="og:description"]');
if (ogDescription) {
  ogDescription.setAttribute("content", page.metaDescription);
}

const twitterTitle = document.querySelector('meta[name="twitter:title"]');
if (twitterTitle) {
  twitterTitle.setAttribute("content", page.metaTitle);
}

const twitterDescription = document.querySelector('meta[name="twitter:description"]');
if (twitterDescription) {
  twitterDescription.setAttribute("content", page.metaDescription);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServicePage page={page} />
  </React.StrictMode>,
);
