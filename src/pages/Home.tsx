import { Link } from "react-router";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Home() {
  return (
    <main>
      <section className="flex items-center bg-zinc-50 px-4 md:min-h-[calc(100vh-80px)]">
        <div className="mx-auto w-full max-w-6xl py-16 md:py-24">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Student in Frontend and Mobile Development
          </p>

          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
            Hi, I’m Tora!
            <br />
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            I'm currently in my third year of a Bachelor's degree in Information Technology at Kristiania University College, where I specialize in Frontend and Mobile Development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/prosjekter"
              className="bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              View portfolio
            </Link>

            <Link
              to="/kontakt"
              className="border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 pt-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Bildet vises under teksten på mobil og til venstre på større skjermer. */}
          <div className="order-2 flex flex-col items-center lg:order-1 lg:items-start">
            <img
              src="/profile.jpg"
              alt="Tora Nordhagen Vang"
              className="h-64 w-64 rounded-full object-cover object-bottom shadow-xl transition-transform duration-500 hover:scale-105 sm:h-90 sm:w-90"
            />
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900">
              About me
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600 md:mt-8 md:leading-9">
              I'm a social person who enjoys spending time with friends,
              staying active, and running.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-600 md:mt-6 md:leading-9">
              Alongside my studies, I've been involved in the student
              organization Kvinner & IT for the past two years, serving as both
              a board member and Financial Manager.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-600 md:mt-6 md:leading-9">
              Through this role, I've had the opportunity to contribute to a
              more inclusive tech community and inspire more women to explore
              technology.
            </p>
          </div>
        </div>
      </section>

      <Skills />
      <Education />
    </main>
  );
}
