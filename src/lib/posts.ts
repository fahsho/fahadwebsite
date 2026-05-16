import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

const postsDirectory = path.join(process.cwd(), "_posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export interface PostData extends PostMeta {
  contentHtml?: string;
}

function getPostFrontmatter(slug: string): { meta: PostMeta; content: string } {
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(postsDirectory, `${decodedSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const meta: PostMeta = {
    slug,
    ...(matterResult.data as { title: string; date: string; excerpt?: string }),
  };

  return { meta, content: matterResult.content };
}

export function getSortedPostsData(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { title: string; date: string; excerpt?: string }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMeta(slug: string): PostMeta {
  const { meta } = getPostFrontmatter(slug);
  return meta;
}

export async function getPostData(slug: string): Promise<PostData> {
  const { meta, content } = getPostFrontmatter(slug);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      // Dual themes for proper light + dark mode support
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      defaultColor: false, // Generate CSS variables instead of forcing one theme
    })
    .use(rehypeStringify)
    .process(content);
    
  const contentHtml = processedContent.toString();

  return {
    ...meta,
    contentHtml,
  };
}
