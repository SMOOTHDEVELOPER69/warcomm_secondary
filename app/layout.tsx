import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import InteractiveBackground from '@/components/InteractiveBackground';

export const metadata: Metadata = {
  title: 'ResilienceNet - Decentralized Communication System',
  description: 'Stay Connected When Networks Collapse.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="cursor-none">
      <body className="bg-background text-textMain antialiased selection:bg-primary/30 cursor-none">
        <CustomCursor />
        <InteractiveBackground />
        <div className="particles z-[-1]"></div>
        <nav className="fixed w-full z-50 glass-panel border-b border-primary/20 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                <span className="font-bold text-xl tracking-widest uppercase">ResilienceNet</span>
            </div>
            <div className="hidden lg:flex gap-6 text-xs font-bold tracking-wider text-textMuted uppercase">
                <a href="#how-it-works" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">Routing</a>
                <a href="#crisis" className="hover:text-red-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Simulator</a>
                <a href="#technical" className="hover:text-secondary transition-colors hover:drop-shadow-[0_0_8px_rgba(180,0,255,0.8)]">Architecture</a>
                <a href="#timeline" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Timeline</a>
                <a href="#team" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Team</a>
            </div>
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="hologram-btn px-6 py-2.5 rounded-none font-bold text-xs">
                Launch System
            </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
