import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <>
      <Navigation />

      <Container className="py-16 md:py-20">
        <header className="mb-14 max-w-xl">
          <p className="text-[22px] md:text-[26px] leading-snug tracking-tight">
            Thoughts on business and how things come together.
          </p>
        </header>

        <div className="max-w-xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-7 border-t border-rule last:border-b"
            >
              <article>
                <h2 className="text-[24px] md:text-[28px] font-medium tracking-tight leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 text-[17px] leading-relaxed text-muted max-w-md">
                    {post.excerpt}
                  </p>
                )}
              </article>
            </Link>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
