'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 5000);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider aspect-video w-full rounded-md">
      {/* Slide 1 */}
      <div className="keen-slider__slide relative">
        <Link href="/" className="block h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1599133209283-08b4d4c308a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero 1"
            fill
            className="object-cover"
            priority
          />
        </Link>
      </div>

      {/* Slide 2 */}
      <div className="keen-slider__slide relative">
        <Link href="/" className="block h-full w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1688901653255-88753dbcb6ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero 2"
            fill
            className="object-cover"
            priority
          />{' '}
        </Link>
      </div>

      {/* Slide 3 */}
      <div className="keen-slider__slide relative">
        <Link href="/" className="block h-full w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1690474616906-4d9f87ae8dcd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero 3"
            fill
            className="object-cover"
            priority
          />{' '}
        </Link>
      </div>
    </div>
  );
}
