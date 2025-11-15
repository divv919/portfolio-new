import { promises as fs } from "node:fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export type BlogMetaData = {
  frontmatter: BlogFrontmatter;
  content: string;
};
export type BlogFrontmatter = {
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  readTime: string;
};
export const getBlog = async (
  slug: string,
  onlyFrontmatter: boolean = false
) => {
  try {
    const file = await fs.readFile(
      path.join(process.cwd(), "app", "data", slug + ".mdx"),
      "utf-8"
    );
    if (!file) {
      return null;
    }
    const { frontmatter, content } = await compileMDX<BlogFrontmatter>({
      source: file,
      options: { parseFrontmatter: true },
    });
    if (onlyFrontmatter) {
      return { frontmatter, slug };
    }
    return { frontmatter, content };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBlogsMetaData = async () => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "app", "data"));

    const blogMetaData = await Promise.all(
      files.map(async (file) => getBlog(file.replace(".mdx", ""), true))
    );
    if (!blogMetaData || blogMetaData.length === 0) {
      return [];
    }
    return blogMetaData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
