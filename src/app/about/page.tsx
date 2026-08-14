import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navigation />

      <Container className="py-16 md:py-24">
        <section className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            Fahad Shoukat
          </h1>

          <p className="mt-8 text-xl leading-relaxed">
            In the AI era, legacy systems and disconnected functions kill speed and progress. I'm interested in modern data foundations that bridge engineering and sales to deliver faster alignment, reliable AI, and compounding revenue.
          </p>

          <div className="mt-8 flex gap-6 text-muted">
            <Link
              href="https://www.linkedin.com/in/fahadshoukat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/fahadshoukat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              X
            </Link>
          </div>
        </section>

        {/* <section className="mt-24 max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight">
            Old silos die here. New foundations win.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="space-y-3">
              <h3 className="text-xl font-medium">Engineering</h3>
              <p className="text-[17px] leading-relaxed text-muted">
                Build systems that ship what customers will pay for.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium">Operations</h3>
              <p className="text-[17px] leading-relaxed text-muted">
                Build lean operations that turn the vision into scalable delivery.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium">Sales</h3>
              <p className="text-[17px] leading-relaxed text-muted">
                Close bigger deals by leading with deep engineering insight and clear value.
              </p>
            </div>
          </div>
        </section> */}
      </Container>

      <Footer />
    </>
  );
}
