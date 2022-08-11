import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }) => {
  return <h2 className="text-2xl text-center py-6" {...storyblokEditable(blok)}>
    {blok.headline}
  </h2>;
};
 
export default Teaser;