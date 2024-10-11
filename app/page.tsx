import Image from "next/image";
import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Blogs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
     
    </main>
  )
}