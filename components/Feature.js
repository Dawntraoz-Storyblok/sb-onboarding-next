import { storyblokEditable } from "@storyblok/react";
 
import Image from "next/image";

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <div className="p-6">
        <Image
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={blok.image?.filename}
          alt={blok.image?.alt}
          width={300}
          height={200}
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.name}</h1>
        <div className="mt-4">
            <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">Read More »</a>
        </div>
    </div>
  </div>
);
 
export default Feature;