import Header from './header';
import ServicesPage from './services/page';
import TeamsPage from './teams/page';
import Title from './title';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className='relative isolate px-6 pt-14 lg:px-8'>
        <article className='py-28 sm:py-48 lg:py-36'>
          <div className='text-center max-w-7xl mx-auto'>
            <Title />
            <p className='mt-6 text-xl text-[#888] p-0 lg:px-72'>
              Labs es una empresa líder en el desarrollo de páginas web que se dedica a transformar
              tus ideas en experiencias digitales excepcionales.
            </p>
            <div className='mt-14 flex items-center justify-center gap-x-8'>
              <a
                href='#'
                className='rounded-md bg-white px-8 py-2.5 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-inter w-40 text-lg'
              >
                Servicios
              </a>
              <a href='#' className='text-lg leading-6 text-white font-inter'>
                Contactanos
              </a>
            </div>
          </div>
        </article>
      </section>
      <TeamsPage />
      <ServicesPage />
    </>
  );
}
