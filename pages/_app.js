import '../styles/globals.css'

/*
** Connecting to Storyblok
*/
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/Page";
import Config from "../components/Config";

import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import Feature from "../components/Feature";
import MenuLink from "../components/MenuLink";
 
const components = {
  page: Page,
  config: Config,
  teaser: Teaser,
  "hero-section": Hero,
  grid: Grid,
  feature: Feature,
  "menu-link": MenuLink,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
