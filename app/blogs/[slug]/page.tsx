import { getBlog } from "@/app/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) {
    return redirect("/blogs");
  }
  const { frontmatter, content } = blog;
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <div>{frontmatter.author}</div>
          <div>{frontmatter.readTime}</div>
        </div>
        <div>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}
