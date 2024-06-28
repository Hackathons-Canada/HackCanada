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

      <div className="relative m-auto min-h-[80vh] w-fit space-y-4 px-8 py-20 md:py-28 lg:py-36">
        <p className="font-alfa text-7xl tracking-wide text-lime-950 drop-shadow-sm md:text-center lg:text-8xl">
          Hack Canada 2025
        </p>
        <p className="w-fit rounded-md px-2 py-1 text-lg font-semibold text-lime-950 sm:text-xl md:mx-auto md:bg-lime-900 md:text-center md:text-lime-100 lg:text-2xl">
          Coming Soon • In-person event • Unofficial MLH Member
        </p>
      </div>
    </section>
  );
}

export default Hero;
