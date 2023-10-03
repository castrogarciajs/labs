import flex from '@/public/lab-flex.jpg';
import scale from '@/public/lab-scale.jpg';
import secure from '@/public/lab-secure.jpg';
import { SpinnerFlex, SpinnerScale, SpinnerSecure } from './spinner';
import ImageInfo from './image';

export default function ServicesPages() {
  return (
    <section>
      <article className='flex justify-between items-center py-6 gap-4 flex-wrap lg:flex-nowrap w-full'>
        <div className='lg:flex-1 flex justify-center flex-col lg:items-center relative w-full'>
          <h2 className='font-inter font-bold text-white p-8 text-2xl lg:text-7xl mt-12'>
            FLEXIBLE
          </h2>
          <SpinnerFlex />
          <p className='font-inter text-white text-xl w-full lg:w-[50vw] py-4 px-2 text-center'>
            Añade JavaScript a tu producto para permitir a los usuarios personalizar su flujo de
            trabajo
          </p>
        </div>
        <ImageInfo image={flex} />
      </article>
      <article className='flex justify-between items-center py-8 gap-4 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row'>
        <ImageInfo image={secure} />
        <div className='lg:flex-1 flex justify-center flex-col lg:items-center relative overflow-x-hidden w-full'>
          <h2 className='font-inter text-white font-bold text-letter text-2xl p-8 lg:text-7xl mt-12 text-center lg:text-right'>
            ESCALABLE
          </h2>
          <SpinnerScale />
          <p className='font-inter text-white text-xl lg:w-[50vw] py-4 px-4 text-center'>
            Escalar a través de muchos miles de usuarios sin problemas, con un arquitectura
            multiinquilino segura
          </p>
        </div>
      </article>
      <article className='flex justify-between items-center py-8 gap-4 flex-wrap lg:flex-nowrap'>
        <div className='lg:flex-1 flex justify-center flex-col items-center w-full'>
          <h2 className='font-inter text-white font-bold text-letter p-8 text-2xl lg:text-7xl mt-12'>
            SEGURO
          </h2>
          <SpinnerSecure />
          <p className='font-inter text-white text-xl lg:w-[50vw] py-4 px-2 text-center'>
            Permite multiinquilino cargas de trabajo con control total de recursos accedidos
          </p>
        </div>
        <ImageInfo image={scale} />
      </article>
    </section>
  );
}
