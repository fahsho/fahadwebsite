import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";

export function Navigation() {
  return (
    <nav className="py-8 border-b border-rule sticky top-0 bg-background/85 backdrop-blur-sm z-50">
      <Container className="flex justify-between items-center gap-4">
        <Link href="/" className="text-lg md:text-[22px] font-medium tracking-tight hover:text-accent transition-colors min-w-0">
          Fahad Shoukat
        </Link>
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Link href="/about" className="text-base text-muted hover:text-foreground transition-colors">
            About
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
}
