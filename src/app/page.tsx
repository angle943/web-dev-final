"use client";
import { Hero } from "@/components/home/hero";
import { HeroMovie } from "@/components/home/hero-movie";
import { Technologies } from "@/components/home/technologies";
import { Why } from "@/components/home/why";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroMovie />
      <Technologies />
      <Why />
      <Cta />
    </main>
  );
}
