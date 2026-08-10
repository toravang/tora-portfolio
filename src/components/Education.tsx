export default function Education() {
  return (
    <section className="m-0 p-0">
      {/* Education */}
      <div className="relative bg-zinc-100 pt-24 pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Education
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Kristiania University College
          </h2>

          <p className="mt-5 text-lg text-neutral-700">
            Bachelor in Information Technology
          </p>

          <p className="mt-1 text-lg text-neutral-700">
            Frontend and Mobile Development
          </p>

          <p className="mt-4 text-base text-neutral-500">
            2024 — 2027
          </p>
        </div>

        {/* Bølge */}
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

      {/* Volunteering */}
      <div className="bg-white px-6 pt-14 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Volunteering
          </p>

          <h2 className="text-1xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Kvinner & IT
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Board Member
          </p>

          <p className="mt-2 text-lg text-neutral-600">
            Financial Manager
          </p>

          <p className="mt-4 mb-8 text-base text-neutral-500">
            2024 - 2026
          </p>

        <h2 className="text-1xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Girl Tech Fest
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            
          </p>

          <p className="mt-4 text-base text-neutral-500">
            2025
          </p>

        </div>
      </div>
    </section>
  );
}