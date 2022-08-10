import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react";
 
export default function Home({ story, preview }) {
  story = useStoryblokState(story, {}, preview);

  return (
    <div className={styles.main}>
      <Head>
        <title>SB Onboarding - Next</title>
        <meta name="description" content="Scaffolding a Next.js and Storyblok project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          { story ? story.name : 'My Site' }
        </h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps(context) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the published version
  let sbParams = {
    version: "published",
  };
 
  // load the draft version on preview only
  if (context.preview) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
    },
    revalidate: 3600,
  };
}
