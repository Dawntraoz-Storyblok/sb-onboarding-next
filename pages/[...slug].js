import Head from "next/head";
import Layout from "../components/Layout";
 
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react";
 
export default function Page({ story, config }) {
  story = useStoryblokState(story);
 
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
  );
}
 
export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const { data: config } = await storyblokApi.get('cdn/stories/config', sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config.story.content,
    },
    revalidate: 3600,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");
 
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    const splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}