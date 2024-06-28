import { aboutSectionMilestones } from "../../lib/constants";

function About() {
  return (
    <section className="px-6 py-20 sm:px-12 md:py-28 lg:py-36">
      <div className="mx-auto mb-16 max-w-screen-md md:mb-24">
        <h3 className="font-alfa mb-6 text-xl tracking-wider text-white md:mb-8 md:text-2xl lg:text-3xl">
          What is HackCanada?
        </h3>
        <div className="space-y-2.5 font-medium text-white/75 md:space-y-4 md:text-lg">
          <p>
            This September, join 1,000+ hackers from around the world for a
            hackathon like no other. Discover a community of like-minded
            hackers, connect with world-class mentors, and build because you
            love to build. At Hack the North 11, you're in for a great time with
            engaging workshops, fun activities, and the chance to network with
            the most exciting companies in tech!
          </p>
          <p>
            Not from Waterloo? We cover food, travel expenses, and lodging so
            you can focus on turning your dreams into reality.
          </p>
        </div>
      </div>
      <ul className="mx-auto grid max-w-screen-lg grid-cols-2 gap-8 sm:gap-16 md:grid-cols-4 lg:gap-8">
        {aboutSectionMilestones.map(({ heading, subheading }) => (
          <li
            key={heading}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-alfa text-center text-4xl text-white lg:text-5xl">
              {heading}
            </p>
            <p className="text-center text-lg font-medium text-white/75 lg:text-xl">
              {subheading}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
