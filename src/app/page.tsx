import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatedName } from "@/components/AnimatedName";
import { Cpu, Settings, LineChart, Linkedin, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import headshot from "@/assets/headshot.png";

export default function Home() {
  return (
    <>
      <Navigation />

      <Container className="py-20 md:py-32">
        {/* Section A: The Header (The Spec Sheet) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5 aspect-[4/5] bg-foreground/5 relative overflow-hidden transition-all duration-700 border border-foreground/10 group">
            <Image
              src={headshot}
              alt="Fahad Shoukat"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>

          <div className="md:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent font-bold">ABOUT</span>
              <AnimatedName
                text="Fahad Shoukat"
                className="text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9]"
                speed={80}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 border-y border-foreground/10 py-8 font-mono">
              <div className="grid grid-cols-3 items-baseline">
                <span className="text-[10px] uppercase text-foreground/40 tracking-widest">Mission</span>
                <span className="col-span-2 text-sm leading-relaxed">I help founders and executives bridge engineering, operations, and sales to ship real products and close bigger deals.</span>
              </div>
              <div className="grid grid-cols-3 items-baseline">
                <span className="text-[10px] uppercase text-foreground/40 tracking-widest">Current_State</span>
                <span className="col-span-2 text-sm">Consulting & Advisory</span>
              </div>
              <div className="grid grid-cols-3 items-baseline">
                <span className="text-[10px] uppercase text-foreground/40 tracking-widest">Previous_State</span>
                <span className="col-span-2 text-sm">VP Operations @ Allocate, COO @ Skiplist</span>
              </div>
              <div className="grid grid-cols-3 items-baseline pt-4 border-t border-foreground/5">
                <span className="text-[10px] uppercase text-foreground/40 tracking-widest">Connect</span>
                <div className="col-span-2 flex gap-6">
                  <Link
                    href="https://www.linkedin.com/in/fahadshoukat/"
                    target="_blank"
                    className="flex items-center gap-2 text-xs hover:text-accent transition-colors group"
                  >
                    <Linkedin size={14} />
                    <span className="border-b border-transparent group-hover:border-accent">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://x.com/fahadshoukat"
                    target="_blank"
                    className="flex items-center gap-2 text-xs hover:text-accent transition-colors group"
                  >
                    <X size={14} />
                    <span className="border-b border-transparent group-hover:border-accent">X</span>
                  </Link>
                  <div className="grid grid-cols-3 items-baseline">
                    <span className="text-[10px] uppercase text-foreground/40 tracking-widest">Message Me</span>
                    <span className="col-span-2 text-sm">hello@mydomainname.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: The "Three Blades" Grid */}
        <section className="mt-40">
          <div className="mb-16 space-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent font-bold">CORE_COMPETENCIES</span>
            <h2 className="text-3xl font-sans font-black tracking-tight">Tech + Execution + Revenue</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors group">
              <div className="h-10 w-10 border border-foreground/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Cpu size={20} />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-sans">Engineering</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-mono">
                  Get engineering teams to build what sales can sell (and customers will pay for).
                </p>
              </div>
            </div>

            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors group">
              <div className="h-10 w-10 border border-foreground/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Settings size={20} />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-sans">Operations</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-mono">
                  Build lean operations that the vision into scalable delivery organizing the chaos.
                </p>
              </div>
            </div>

            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors group">
              <div className="h-10 w-10 border border-foreground/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <LineChart size={20} />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-sans">Sales</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-mono">
                  Close bigger deals by leading with deep engineering insight and clear value.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Section D: Selected Work */}
        <section className="mt-40">
          <div className="mb-16 space-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent font-bold">PROJECT_PORTFOLIO</span>
            <h2 className="text-3xl font-sans font-black tracking-tight">Selected Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors">
              <h3 className="text-xl font-bold font-sans">Enterprise Biz Dev, GTM, and Partnerships</h3>
              <ul className="list-disc list-inside font-mono text-sm text-foreground/70 leading-relaxed space-y-2">
                <li>Growing enterprise revenue from zero to multi-million dollar ARR regions.</li>
                <li>Establishing partnerships across US and International.</li>
                <li>Building systems that supercharge growth.</li>
                <li>Presidents Clubs, 2x exits, Salesforce architecture and deployments.</li>
              </ul>
            </div>

            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors">
              <h3 className="text-xl font-bold font-sans">Wireless, Mobile, and Semiconductors</h3>
              <ul className="list-disc list-inside font-mono text-sm text-foreground/70 leading-relaxed space-y-2">
                <li>New product design and production for chipset designers, mobile device manufacturers, infrastructure manufacturers, test houses, and network operators shaping the next generation of wireless communications (Cellular, WiFi, BT, UWB, IoT).</li>
                <li>Projects: Nest, Google Pixel, Intel Chipsets, Low Orbit Satellites, Nvidia Chipsets/GPU.</li>
              </ul>
            </div>

            <div className="bg-background p-10 space-y-6 hover:bg-foreground/[0.02] transition-colors col-span-full">
              <h3 className="text-xl font-bold font-sans">Automotive</h3>
              <ul className="list-disc list-inside font-mono text-sm text-foreground/70 leading-relaxed space-y-2">
                <li>Advancement of the automotive industry’s vision of autonomous driving, electrification, and connectivity.</li>
                <li>Development of advanced sensors, adoption of new wireless technologies (WiFi, 5G), use of high voltage, fast-switching semiconductors and migration to higher data rate in-vehicle networks.</li>
                <li>Projects: Tesla, Neo, Zoox, Ford, Drive, Uber, Waymo.</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}
