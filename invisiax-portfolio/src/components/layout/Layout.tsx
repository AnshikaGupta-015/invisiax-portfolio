import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Main Gradient Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(145deg, hsl(220 50% 4%) 0%, hsl(190 40% 6%) 40%, hsl(165 50% 10%) 100%)'
        }}
      />
      {/* Teal glow from bottom right */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 80% 85%, hsl(165 70% 15% / 0.9) 0%, hsl(170 60% 10% / 0.5) 35%, transparent 70%)'
        }}
      />
      {/* Subtle top-left dark area */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 15% 15%, hsl(220 50% 3%) 0%, transparent 60%)'
        }}
      />
      {/* INVISIAX Watermark Text */}
      <div 
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span 
          className="font-bold tracking-[0.10em] opacity-[0.10] flex items-baseline leading-none"
          style={{
            color: 'hsl(170 50% 40%)',
            fontFamily: 'Space Grotesk, sans-serif',
            transform: 'translateY(0%)',
            mixBlendMode: 'overlay',
            textShadow: '0 0 48px hsl(170 60% 35% / 0.20)'
          }}
        >
          <span className="text-[14vw]"  style={{
    transform: "translateY(-18%)"
  }}>INVISIA</span>
          <span className="text-[26vw]">X</span>
        </span>
      </div>
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}


