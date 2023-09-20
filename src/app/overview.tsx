import Image from 'next/image';
import homePage from '@/mark-home-page.png';

export default function OverViewPage() {
  return (
    <section className="px-8 py-6 grid auto-cols-auto lg:grid-cols-[50%_50%] h-full">
      <article className='h-full flex flex-col items-center justify-center'>
        <h1 className='text-7xl py-4 font-bold text-black font-inter'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          eligendi?
        </h1>
        <p className='text-zinc font-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facere
          atque possimus vero blanditiis molestias commodi eos sapiente enim
          ipsa.
        </p>
        <a href="#" className='rounded bg-purple py-2 px-6 text-white'>Demo</a>
      </article>
      <figure className='h-full flex flex-col items-center justify-center'>
        <Image src={homePage} alt='Digital inc' className='w-auto object-cover lg:h-96'/>
      </figure>
    </section>
  );
}
