import Image from "next/image";
import ArrowOnHover from "../components/ArrowOnHover";
import { getBlogsMetaData } from "../lib/mdx";
import Link from "next/link";

export default async function Blogs() {
  const blogMetaData = await getBlogsMetaData();
  if (!blogMetaData || blogMetaData.length === 0) {
    <div className="flex flex-col text-md gap-9 w-full tracking-tight ">
      <div className="w-full aspect-video lg:aspect-2/1 relative">
        <Image alt="bg" fill src="/aesthetic.jpg" />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <div className="text-neutral-300 leading-5">
          This section will be updated when i start writing blogs :)
        </div>
        <div className="text-neutral-400 flex gap-2">
          Till then follow me on{" "}
          <ArrowOnHover href="https://x.com/divv919">
            <span className="border-b border-neutral-600 border-dotted">
              x.com
            </span>
          </ArrowOnHover>
        </div>
      </div>
    </div>;
  }
  return (
    <div>
      {blogMetaData.map((blog, index) => {
        if (!blog) {
          return null;
        }
        return (
          <div key={index}>
            <Link href={`/blogs/${blog.slug}`}>{blog.frontmatter.title}</Link>
            <div className="w-full flex justify-between">
              <div className="flex gap-4">
                <div>{blog.frontmatter.author}</div>
                <div>{blog.frontmatter.readTime}</div>
              </div>
              <div>{blog.frontmatter.date}</div>
            </div>
            <span>{blog.frontmatter.tags.join(", ")}</span>
            <p>{blog.frontmatter.description}</p>
          </div>
        );
      })}
    </div>
  );
}
