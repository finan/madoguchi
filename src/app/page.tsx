import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <section className="mt-12">
        <h1 className="mb-4">Selamat datang di Jepang</h1>
      </section>
      <section aria-label="Promotional banners" className="mt-12">
        <HeroSlider />
      </section>
      <section className="mt-12 flex flex-col gap-4">
        <h2 className="mb-4 font-bold">
          Solusi Kebutuhan Awal Perantau Indonesia di Jepang
        </h2>
        <p>
          Kami memberi layanan dari saat kamu tiba di Jepang, sampai kembali ke
          tanah air. Dari SIM Card internet, sampai pencairan nenkin (dana
          pensiun) - semua bisa diatur di sini.
        </p>
        <button className="btn btn-primary self-start">Ini tombol CTA</button>
      </section>
    </>
  );
}
