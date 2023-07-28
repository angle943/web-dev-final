"use client";
import { Hero } from "@/components/home/hero";
import { HeroMovie } from "@/components/home/hero-movie";
import { Technologies } from "@/components/home/technologies";
import { Why } from "@/components/home/why";
import { Cta } from "@/components/home/cta";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroMovie />
      <Technologies />
      <Why />
      <Cta />
      <Testimonials />
    </main>
  );
}
