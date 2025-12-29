import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-accent transition-all duration-150" style={{ width: '0%' }} />
      </div>

      <Navigation />
      
      <article className="py-20 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Link 
              href="/blog" 
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
                prose-code:font-mono prose-code:text-sm prose-code:bg-foreground/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-foreground/10 prose-pre:rounded-none prose-pre:p-6
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic
                "
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </div>
        </Container>
      </article>

      <Footer />

      {/* Script for progress bar */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.onscroll = function() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("scroll-progress").style.width = scrolled + "%";
        };
      `}} />
    </>
  );
}

