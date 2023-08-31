import React from 'react';
import Hero from '../../components/sections/Hero';
import Popular from '../../components/sections/Popular';
import About from '../../components/sections/About';


export default function Home() {
  return (
    <main className="container mx-auto lg:px-20 px-3">
      <section>
        <Hero />
        <Popular />
        <About />
      </section>
    </main>
  )
}
