export default function TeamsPage() {
  const teams = ['Inc', 'Employeess', 'Labs'];
  return (
    <section className='flex flex-col items-center justify-center py-6'>
      <h2 className='mt-6 text-2xl text-[#888] text-center py-8'>Confiando por</h2>
      <div className='relative flex flex-col overflow-hidden gap-y-4'>
        <article className='flex w-full overflow-x-hidden [--gap:1rem] [--duration:20s]'>
          <div className='flex w-max animate-marquee items-stretch gap-[--gap] [animation-direction:reverse] hover:[animation-play-state:paused]'>
            {teams.map((ln, index) => (
              <a
                href='#'
                key={index}
                className='relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group text-white font-inter text-2xl'
              >
                {ln}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
