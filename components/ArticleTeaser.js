import Link from "next/link";
import Image from "next/image";

import { render } from 'storyblok-rich-text-react-renderer';
 
const ArticleTeaser = ({ article }) => {
  return (
    <div className="column feature">
      <Image
        className="object-cover object-center w-full rounded-xl"
        src={article.image.filename}
        alt="blog"
        width={1500}
        height={250}
      />
      <h1 className="mx-auto my-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {article.title}
      </h1>
      <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
        {render(article.content)}
      </div>
      <div className="mt-4">
        <Link href={`/blog/${article.slug}`}>
          <a
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            
            Read More »
          </a>
        </Link>
      </div>
    </div>
  )
};

export default ArticleTeaser;