import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";

export function Navigation() {
  return (
    <nav className="py-8 border-b border-foreground/5 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <Container className="flex justify-between items-center">
        <Link href="/" className="font-mono text-sm tracking-tighter hover:text-accent transition-colors">
          FAHAD_SHOUKAT
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/blog" className="font-mono text-xs tracking-widest uppercase hover:text-accent transition-colors">
            LOG
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
}

