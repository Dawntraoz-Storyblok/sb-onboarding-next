import Head from "next/head"
import Layout from "../components/Layout";
 
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react";
 
export default function Home({ story, config, preview }) {
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"],
  }, preview);

  return (
    <div>
      <Head>
        <title>SB Onboarding - Next</title>
        <meta name="description" content="Scaffolding a Next.js and Storyblok project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout config={config}>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ preview }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the published version
  let sbParams = {
    version: "published",
    resolve_relations: ["popular-articles.articles"],
  };
 
  // load the draft version on preview only
  if (preview) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const { data: config } = await storyblokApi.get('cdn/stories/config', sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
      config: config.story.content,
    },
    revalidate: 3600,
  };
}
