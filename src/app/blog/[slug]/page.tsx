import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getPostData, getSortedPostsData, getPostMeta } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getPostMeta(params.slug);
  const description = post.excerpt || "Thoughts on business, systems, and execution by Fahad Shoukat.";

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex((post) => post.slug === params.slug);

  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-px z-[60] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-accent transition-all duration-150" style={{ width: "0%" }} />
      </div>
      <ScrollProgress />

      <Navigation />

      <article className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mx-auto">
            <Link
              href="/"
              className="text-[15px] text-muted hover:text-foreground transition-colors"
            >
              ← Writing
            </Link>

            <header className="mt-7 mb-12">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
                {postData.title}
              </h1>
              {postData.excerpt && (
                <p className="mt-4 text-[22px] leading-snug text-muted">
                  {postData.excerpt}
                </p>
              )}
            </header>

            <div
              className="prose prose-neutral dark:prose-invert max-w-none
                font-serif text-xl leading-relaxed
                prose-headings:font-medium prose-headings:tracking-tight
                prose-h2:text-[28px] prose-h2:mt-12 prose-h2:mb-5
                prose-p:mb-7 prose-p:text-foreground
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:font-medium
                prose-code:font-mono prose-code:text-sm prose-code:bg-foreground/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:border prose-pre:border-rule prose-pre:rounded-none prose-pre:p-6
                prose-blockquote:border-l-[1.5px] prose-blockquote:border-accent prose-blockquote:bg-transparent prose-blockquote:py-0 prose-blockquote:pl-5 prose-blockquote:not-italic prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:text-[22px] prose-blockquote:leading-snug prose-blockquote:font-normal
                "
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </div>

          <div className="max-w-xl mx-auto mt-16 pt-8 border-t border-rule">
            <Link
              href="/"
              className="text-[15px] text-muted hover:text-foreground transition-colors"
            >
              ← Writing
            </Link>

            {(nextPost || previousPost) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {previousPost ? (
                  <Link
                    href={`/blog/${previousPost.slug}`}
                    className="group text-left"
                  >
                    <span className="block text-[15px] text-muted mb-1">Previous</span>
                    <span className="block text-lg font-medium leading-snug group-hover:text-accent transition-colors">
                      {previousPost.title}
                    </span>
                  </Link>
                ) : <div />}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group text-left md:text-right"
                  >
                    <span className="block text-[15px] text-muted mb-1">Next</span>
                    <span className="block text-lg font-medium leading-snug group-hover:text-accent transition-colors">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Container>
      </article>

      <Footer />
    </>
  );
}
