import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TopProducts from '@/components/TopProducts';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TopProducts />
        <Categories />
      </main>
      <Footer />
    </>
  );
}