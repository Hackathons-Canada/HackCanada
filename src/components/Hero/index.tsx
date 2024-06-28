import heroBg from "../../assets/herobg.png";

function Hero() {
  return (
    <section className="relative mb-40 flex min-h-[100dvh] w-full items-center justify-center">
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-40 top-0"
        aria-label="Hero background image"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-x-0 -bottom-40 top-0 bg-gradient-to-b from-transparent via-transparent via-[80%] to-[#c2cc59]"></div>

      <div className="relative m-auto min-h-[80vh] w-fit space-y-4 px-8 py-20 md:py-28 md:text-center lg:py-36">
        <h1 className="font-alfa text-7xl tracking-wide text-lime-950 drop-shadow-sm lg:text-8xl">
          Hack Canada 2025
        </h1>
        <h2 className="mx-auto w-fit bg-lime-900 px-2 py-1 text-2xl font-medium text-zinc-100 drop-shadow-xl">
          Coming Soon • In-person event • Unofficial MLH Member
        </h2>
      </div>
    </section>
  );
}

export default Hero;
