import React from 'react';
import Hero from '../../components/sections/Hero';
import Popular from '../../components/sections/Popular';
import About from '../../components/sections/About';
import Service from '../../components/sections/Service';
import Offer from '../../components/sections/Offer';
import Testimonials from '../../components/sections/Testimonials';
import Newsletter from '../../components/sections/Newsletter';


export default function Home() {
  return (
    <main className="container mx-auto lg:px-20 px-3">
      <section>
        <Hero />
        <Popular />
        <About />
        <Service />
        <Offer />
        <Testimonials />
        <Newsletter />
      </section>
    </main>
  )
}
