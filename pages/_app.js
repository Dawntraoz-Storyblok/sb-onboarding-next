import '../styles/globals.css'

/*
** Connecting to Storyblok
*/
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/Page";
import Article from "../components/Article";
import Config from "../components/Config";

import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import AllArticles from "../components/AllArticles";
import PopularArticles from "../components/PopularArticles";
import Feature from "../components/Feature";
import MenuLink from "../components/MenuLink";
 
const components = {
  page: Page,
  article: Article,
  config: Config,
  teaser: Teaser,
  "hero-section": Hero,
  grid: Grid,
  "all-articles": AllArticles,
  "popular-articles": PopularArticles,
  feature: Feature,
  "menu-link": MenuLink,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
