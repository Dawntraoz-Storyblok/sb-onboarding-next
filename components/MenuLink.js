import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const MenuLink = ({ blok, mobile }) => {
  if (mobile) {
    return <div className="-m-3" {...storyblokEditable(blok)}>
      <Link href={blok.link.cached_url}>
        <a className="p-3 flex items-center rounded-md hover:bg-gray-50">
          <span className="ml-3 text-base font-medium text-gray-900">{blok.name}</span>
        </a>
      </Link>
    </div>
  }
  return <div className="px-5" {...storyblokEditable(blok)}>
    <Link href={blok.link.cached_url}>
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
        {blok.name}
      </a>
    </Link>
  </div>
};

export default MenuLink;