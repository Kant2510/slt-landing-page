import Hero from '@/components/landing/Hero';
import Vision from '@/components/landing/Vision';
import Features from '@/components/landing/Features';
import Products from '@/components/landing/Products';
import Applications from '@/components/landing/Applications';
import Contact from '@/components/landing/Contact';
import ParticlesBackground from '@/components/landing/ParticlesBackground';
import ProductSlide from '@/components/landing/ProductSlide';
import { CATEGORIES } from '@/data/products';

export const revalidate = 3600; // revalidate after 1 hour

export default async function Home() {
  const products = await fetch('https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/products.json')
  if (!products.ok) {
    throw new Error('Failed to fetch products');
  }

  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground />
      <main>
        <Hero />
        <ProductSlide categories={CATEGORIES} products={await products.json()} />
        <Vision />
        <Features />
        <Products />
        <Applications />
        <Contact />
      </main>
    </div>
  );
}
