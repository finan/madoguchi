'use client';

import HeroSlider from '@/components/HeroSlider';
import KeenSliderWrapper from '@/components/KeenSliderWrapper';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="mt-12">
        <h1 className="mb-4">Selamat datang di Jepang</h1>
      </section>
      <section aria-label="Promotional banners" className="mt-12">
        <HeroSlider />
      </section>
      <section className="mt-12 flex flex-col gap-4">
        <div>
          <h2 className="mb-4 font-bold">
            Solusi Kebutuhan Awal Perantau Indonesia di Jepang
          </h2>
          <p>
            Kami memberi layanan dari saat kamu tiba di Jepang, sampai kembali
            ke tanah air. Dari SIM Card internet, sampai pencairan nenkin (dana
            pensiun) - semua bisa diatur di sini.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Banner 1 */}
          <div
            onClick={() => router.push('/promo/banner1')}
            className="cursor-pointer"
          >
            <KeenSliderWrapper>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-red-300 text-xl font-bold text-white">
                Banner 1 - Slide 1
              </div>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-red-400 text-xl font-bold text-white">
                Banner 1 - Slide 2
              </div>
            </KeenSliderWrapper>{' '}
          </div>

          {/* Banner 2 */}
          <div
            onClick={() => router.push('/promo/banner2')}
            className="cursor-pointer"
          >
            <KeenSliderWrapper>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-green-300 text-xl font-bold text-white">
                Banner 2 - Slide 1
              </div>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-green-400 text-xl font-bold text-white">
                Banner 2 - Slide 2
              </div>
            </KeenSliderWrapper>
          </div>

          {/* Banner 3 */}
          <div
            onClick={() => router.push('/promo/banner3')}
            className="cursor-pointer"
          >
            <KeenSliderWrapper>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-blue-300 text-xl font-bold text-white">
                Banner 3 - Slide 1
              </div>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-blue-400 text-xl font-bold text-white">
                Banner 3 - Slide 2
              </div>
            </KeenSliderWrapper>
          </div>

          {/* Banner 4 */}
          <div
            onClick={() => router.push('/promo/banner4')}
            className="cursor-pointer"
          >
            <KeenSliderWrapper>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-yellow-300 text-xl font-bold text-white">
                Banner 4 - Slide 1
              </div>
              <div className="keen-slider__slide flex aspect-video items-center justify-center bg-yellow-400 text-xl font-bold text-white">
                Banner 4 - Slide 2
              </div>
            </KeenSliderWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
