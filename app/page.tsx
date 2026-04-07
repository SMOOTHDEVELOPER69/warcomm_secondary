import React from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Story from '@/components/Story';
import Crisis from '@/components/Crisis';
import Security from '@/components/Security';
import Vision from '@/components/Vision';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Benefits from '@/components/Benefits';
import Technical from '@/components/Technical';
import Timeline from '@/components/Timeline';
import Demo from '@/components/Demo';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <Hero />
      <Problem />
      <Story />
      <HowItWorks />
      <Crisis />
      <Security />
      <Technical />
      <Demo />
      <Benefits />
      <Vision />
      <Timeline />
      <FAQ />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
