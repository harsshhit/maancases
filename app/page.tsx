import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import Categories from '@/components/Categories';
import AllProducts from '@/components/AllProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <Categories />
        <AllProducts />
      </main>
      <Footer />
    </>
  );
}