import { Button } from '@practice-hub/common';
import Image from 'next/image';

export const HeroSection = () => (
  <section className="relative h-[200px] w-full">
    <div className="absolute inset-0">
      <Image
        src={'https://picsum.photos/1600/300'}
        fill
        className="object-cover brightness-50"
        sizes="100vw"
        priority
        alt="Decorative image"
      />
    </div>
    <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-amber-100">
      <h1 className="font-display mb-4 text-4xl font-bold">
        Your Space to Create
      </h1>
      <p className="font-quirky mb-8 text-xl">
        Practice Rooms for Solo Musicians Anytime, Anywhere
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          href="#"
          variant="solid"
          className="flex items-center justify-center"
        >
          Check availability
        </Button>
      </div>
    </div>
  </section>
);
