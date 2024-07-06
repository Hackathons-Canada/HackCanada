const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative bg-[#8BBDF0] px-6 py-20 shadow-[0_-4px_12px_0_rgba(0,0,0,0.15)] selection:bg-cyan-100 selection:text-cyan-950 sm:px-12 md:py-28 lg:py-36"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6 md:gap-8">
        <p className="text-center font-alfa text-3xl tracking-wider text-cyan-950 sm:text-4xl lg:text-5xl">
          Sponsors
        </p>
        <p className="max-w-lg text-center font-medium text-cyan-900 text-white/75 md:text-lg">
          Interesting in sponsoring us? Let's get in touch! We are eager to
          bring this event to life with your support.
        </p>

        <a href="mailto:GJwYp@example.com" className="mt-2 md:mt-4">
          <button className="group relative overflow-hidden rounded-lg bg-cyan-900 px-4 py-2 font-semibold text-cyan-50 transition-all md:text-lg md:hover:tracking-widest">
            <span className="absolute inset-0 -translate-y-full bg-white transition-transform group-hover:translate-y-0 max-md:hidden" />
            <span className="group-hover:mix-blend-difference">
              Become A Sponsor
            </span>
          </button>
        </a>

        <a
          href=""
          className="-mt-4 font-medium text-cyan-800 underline underline-offset-4 max-sm:text-sm"
        >
          Access Our Sponsorship Package
        </a>

        <div className="mb-10 mt-6 h-1 w-full max-w-5xl rounded-full bg-gradient-to-r from-transparent via-cyan-700 to-transparent md:mb-16 md:mt-10" />
      </div>

      <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg bg-cyan-950 p-4 md:gap-10 md:p-8 lg:p-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="font-alfa text-lg tracking-widest text-amber-400 md:text-2xl">
            Gold Sponsors
          </p>
          <div className="w-full rounded-lg bg-amber-200 p-24 outline outline-4 -outline-offset-8 outline-amber-500"></div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <p className="font-alfa text-lg tracking-widest text-slate-300 md:text-2xl">
            Silver Sponsors
          </p>
          <div className="w-full rounded-lg bg-slate-200 p-24 outline outline-4 -outline-offset-8 outline-slate-400"></div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <p className="font-alfa text-lg tracking-widest text-amber-600 md:text-2xl">
            Bronze Sponsors
          </p>
          <div className="w-full rounded-lg bg-orange-200 p-24 outline outline-4 -outline-offset-8 outline-amber-600"></div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <p className="font-alfa text-lg tracking-widest text-gray-400 md:text-2xl">
            Iron Sponsors
          </p>
          <div className="w-full rounded-lg bg-gray-300 p-24 outline outline-4 -outline-offset-8 outline-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
