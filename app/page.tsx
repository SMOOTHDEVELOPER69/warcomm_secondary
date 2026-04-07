import React from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Story from '@/components/Story';
import dynamic from 'next/dynamic';

const Crisis = dynamic(() => import('@/components/Crisis'), { ssr: true });
const Security = dynamic(() => import('@/components/Security'), { ssr: true });
const Vision = dynamic(() => import('@/components/Vision'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const Benefits = dynamic(() => import('@/components/Benefits'), { ssr: true });
const Technical = dynamic(() => import('@/components/Technical'), { ssr: true });
const Timeline = dynamic(() => import('@/components/Timeline'), { ssr: true });
const Demo = dynamic(() => import('@/components/Demo'), { ssr: true });
const Team = dynamic(() => import('@/components/Team'), { ssr: true });
const CTA = dynamic(() => import('@/components/CTA'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

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
