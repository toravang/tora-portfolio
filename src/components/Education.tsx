export default function Education() {
  return (
    <section>
      <div className="relative bg-zinc-100 pt-24 pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Education
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Kristiania University College
          </h2>

          <p className="mt-5 text-lg text-neutral-700">
            Bachelor in Information Technology -
          </p>

          <p className="mt-1 text-lg text-neutral-700">
            Frontend and Mobile Development
          </p>

          <p className="mt-4 text-base text-neutral-500">
            2024 - 2027
          </p>

          <div className="mx-auto mt-10 max-w-2xl border-t border-neutral-300 pt-8">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
              University of Oslo
            </h3>

            <p className="mt-3 text-lg text-neutral-700">Informatics</p>

            <p className="mt-2 text-base text-neutral-600">
              One year completed
            </p>

            <p className="mt-3 text-base text-neutral-500">2023 - 2024</p>
          </div>
        </div>

        {/* SVG-en lager overgangen mellom utdanning og frivillig arbeid. */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="block h-24 w-full md:h-32"
            aria-hidden="true"
          >
            <path
              d="
                M0,85
                C160,30 300,30 470,70
                C650,115 810,120 980,75
                C1140,35 1280,30 1440,75
                L1440,150
                L0,150
                Z
              "
              fill="#ffffffff"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white px-6 pb-24 pt-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Volunteering
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Volunteer work
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                    Kvinner &amp; IT
                  </h3>
                  <p className="mt-2 font-medium text-neutral-700">
                    Board Member &amp; Financial Manager
                  </p>
                </div>
                <time className="shrink-0 text-sm text-neutral-500">
                  2024 - 2026
                </time>
              </div>

              <p className="mt-4 leading-7 text-neutral-600">
                Contributing to an inclusive student community for women in
                technology.
              </p>
            </article>

            <article className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                    Girl Tech Fest
                  </h3>
                  <p className="mt-2 font-medium text-neutral-700">
                    Volunteer · Video Production
                  </p>
                </div>
                <time className="shrink-0 text-sm text-neutral-500">2025</time>
              </div>

              <p className="mt-4 leading-7 text-neutral-600">
                Filmed and edited short videos for participating companies to
                publish on LinkedIn.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
