import { FiArrowUpRight, FiCheck, FiEdit3, FiLock } from "react-icons/fi";

const articleUrl =
  "https://www.kode24.no/artikkel/i-dag-er-det-mange-kvinner-som-foler-at-de-ikke-passer-inn-i-it-bransjen/228262";

const runTrackTags = ["React", "TypeScript", "Tailwind CSS", "Strava API"];
const portfolioTags = ["React", "TypeScript", "Tailwind CSS", "Vite"];

export default function Projects() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-zinc-50 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Projects &amp; Writing
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
            A growing collection of what I&apos;m learning, building, and
            contributing to.
          </p>
        </header>

        <section className="mt-14 md:mt-16" aria-labelledby="projects-heading">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Selected projects
            </p>
            <h2
              id="projects-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900"
            >
              What I&apos;ve built
            </h2>
          </div>

          <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="grid md:grid-cols-[1.05fr_0.95fr] lg:h-[340px]">
              <div className="flex items-center bg-[#edf7ef] p-4 sm:p-6 md:min-h-[320px]">
                <img
                  src="/runtrack-preview.png"
                  alt="RunTrack dashboard with weekly running statistics"
                  className="w-full rounded-2xl border border-white/70 shadow-lg"
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-9 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                    In progress
                  </p>
                </div>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  RunTrack
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                  A responsive running log with weekly statistics, recent run
                  history, automatic pace calculation, local storage, and an
                  optional Strava import.
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label="Technologies used for RunTrack"
                >
                  {runTrackTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-xs font-medium text-neutral-600"
                  aria-label="RunTrack source code is currently in a private GitHub repository"
                >
                  <FiLock aria-hidden="true" />
                  Private repository
                </div>
              </div>
            </div>
          </article>

          <article className="group mt-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="grid md:grid-cols-[0.72fr_1.28fr] lg:h-[340px]">
              <div className="relative flex min-h-56 flex-col justify-between overflow-hidden bg-neutral-900 p-7 text-white md:min-h-[320px] md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/[0.04]"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                    Personal project
                  </span>
                </div>

                <div className="relative">
                  <p className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-neutral-400">
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-9 lg:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  Personal website
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                  The website you&apos;re exploring right now! Designed and
                  developed as a home for my experience, skills, projects, and
                  writing.
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {portfolioTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center gap-3 text-sm font-medium text-neutral-900">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <FiCheck aria-hidden="true" />
                  </span>
                  You&apos;re viewing the live project
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 md:mt-20" aria-labelledby="writing-heading">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Writing
            </p>
            <h2
              id="writing-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900"
            >
              Published thoughts
            </h2>
          </div>

          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the kode24 article: I dag er det mange kvinner som føler at de ikke passer inn i IT-bransjen"
            className="group block rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-4 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-xl text-white">
                <FiEdit3 aria-hidden="true" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  <span>kode24</span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-neutral-300"
                  />
                  <span>Reader contribution</span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-neutral-300"
                  />
                  <time dateTime="2025-02-20">February 2025</time>
                </div>

                <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600">
                  «I dag er det mange kvinner som føler at de ikke passer inn i
                  IT-bransjen»
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
                  On networks, role models, and inclusive meeting places for
                  women in technology. Co-written with Oda Nøstdahl for Kvinner
                  &amp; IT.
                </p>
              </div>

              <span className="flex items-center gap-2 text-sm font-medium text-neutral-900 md:self-end">
                Read article
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
}
