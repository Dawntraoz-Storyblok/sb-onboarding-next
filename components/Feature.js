import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div className="bg-teal-50 rounded-md p-4" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;