import '../styles/globals.css'

/*
** Connecting to Storyblok
*/
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "../components/Config";
import MenuLink from "../components/MenuLink";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  "menu_link": MenuLink,
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
