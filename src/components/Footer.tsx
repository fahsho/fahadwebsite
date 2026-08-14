import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-8">
      <Container className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[15px] text-muted">
        <span>© Fahad Shoukat</span>
        <div className="flex gap-6">
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
      </Container>
    </footer>
  );
}
