import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <section aria-label="Promotional banners" className="mt-12">
        <HeroSlider />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Welcome to Madoguchi</h2>
        <p className="text-gray-600">Ini adalah halaman utama aplikasi kamu.</p>
        <button className="btn btn-primary">Ini tombol CTA</button>
      </section>
    </>
  );
}
