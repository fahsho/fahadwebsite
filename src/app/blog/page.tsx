import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <>
      <Navigation />
      
      <Container className="py-20 md:py-32">
        <div className="max-w-2xl">
          <header className="mb-20 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent font-bold">THE_LOG</span>
            <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tighter">
              Archive & Insights
            </h1>
            <p className="font-mono text-sm text-foreground/50 leading-relaxed">
              Documentation of systems, thoughts, and operational philosophy.
            </p>
          </header>

          <div className="space-y-px bg-foreground/10 border border-foreground/10">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-background p-8 hover:bg-foreground/[0.02] transition-all"
              >
                <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold font-sans group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-foreground/60 font-mono leading-relaxed max-w-md">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

