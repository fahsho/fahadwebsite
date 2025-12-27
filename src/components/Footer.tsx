import { Container } from "./Container";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-40 border-t border-foreground/5 py-20">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
            &copy; 2025 FAHAD SHOUKAT // ARCHIVE
          </div>
          <div className="flex gap-6">
            <Link 
              href="https://www.linkedin.com/in/fahadshoukat/" 
              target="_blank"
              className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2"
            >
              <Linkedin size={12} />
              LINKEDIN
            </Link>
            <Link 
              href="https://x.com/fahadshoukat_" 
              target="_blank"
              className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2"
            >
              <Twitter size={12} />
              TWITTER
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

