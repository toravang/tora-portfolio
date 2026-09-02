import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Kontaktinformasjonen ligger samlet her, slik at kortene er enkle å oppdatere.
const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tora-nordhagen-vang",
    icon: FaLinkedin,
    opensInNewTab: true,
  },
  {
    name: "Email",
    href: "mailto:toranvang@gmail.com",
    icon: FaEnvelope,
    opensInNewTab: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/toravang",
    icon: FaGithub,
    opensInNewTab: true,
  },
];

const contactCardStyle =
  "group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900";

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Let&apos;s Connect
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
            I&apos;m always open to new opportunities, collaborations, and
            interesting conversations.
          </p>
        </div>

        <section className="mt-10 rounded-3xl border border-neutral-200 bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Get in touch
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
              Whether you have a project in mind, are interested in
              collaborating, or simply want to say hello, I&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
            {contactLinks.map(
              ({ name, href, icon: Icon, opensInNewTab }) => (
                <a
                  key={name}
                  href={href}
                  target={opensInNewTab ? "_blank" : undefined}
                  rel={opensInNewTab ? "noopener noreferrer" : undefined}
                  className={contactCardStyle}
                >
                  <Icon
                    aria-hidden="true"
                    className="text-4xl text-neutral-900 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="mt-4 text-lg font-medium text-neutral-900">
                    {name}
                  </span>
                </a>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
