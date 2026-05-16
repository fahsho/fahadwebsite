import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getPostData, getSortedPostsData, getPostMeta } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  // Since posts are sorted by date (newest first):
  // next post is at index - 1 (newer)
  // previous post is at index + 1 (older)
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-accent transition-all duration-150" style={{ width: '0%' }} />
      </div>
      <ScrollProgress />

      <Navigation />

      <article className="py-20 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-foreground/40 hover:text-accent transition-colors mb-12 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Return_to_Log
            </Link>

            <header className="mb-16 space-y-4">
              <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tighter leading-none">
                {postData.title}
              </h1>
              {postData.excerpt && (
                <p className="text-xl text-foreground/60 font-sans tracking-tight leading-relaxed pt-4 border-t border-foreground/5">
                  {postData.excerpt}
                </p>
              )}
            </header>

            <div
              className="prose prose-neutral dark:prose-invert max-w-none 
                font-sans text-lg leading-relaxed
                prose-h2:font-black prose-h2:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:mb-8
                prose-code:font-mono prose-code:text-sm prose-code:bg-foreground/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:border prose-pre:border-foreground/10 prose-pre:rounded-none prose-pre:p-6
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic
                "
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </div>

          <hr className="my-12 border-foreground/10" />

          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground/40 hover:text-accent transition-colors group"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Return_to_Log
              </Link>
            </div>

            {(nextPost || previousPost) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {previousPost ? (
                  <Link
                    href={`/blog/${previousPost.slug}`}
                    className="group border border-foreground/10 p-6 hover:border-accent/50 transition-colors text-right md:text-left h-full flex flex-col justify-center"
                  >
                    <span className="block font-mono text-[10px] tracking-widest uppercase text-foreground/40 mb-1">Previous</span>
                    <span className="block font-sans font-bold text-lg group-hover:text-accent transition-colors line-clamp-2">
                      {previousPost.title}
                    </span>
                  </Link>
                ) : <div />}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group border border-foreground/10 p-6 hover:border-accent/50 transition-colors text-left md:text-right h-full flex flex-col justify-center"
                  >
                    <span className="block font-mono text-[10px] tracking-widest uppercase text-foreground/40 mb-1">Next</span>
                    <span className="block font-sans font-bold text-lg group-hover:text-accent transition-colors line-clamp-2">
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

