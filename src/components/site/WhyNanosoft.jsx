import { ArrowUpRight } from 'lucide-react';

const PRINCIPLES = [
  {
    index: '01',
    title: 'Senior-only teams',
    copy: 'The people who scope your system are the ones who build it. No juniors learning on your budget.',
  },
  {
    index: '02',
    title: 'Written before built',
    copy: 'A documented architecture, delivery plan and fixed scope — you approve a number, not an estimate range.',
  },
  {
    index: '03',
    title: 'Systems you own',
    copy: 'Code, infrastructure and documentation hand over cleanly. No lock-in and no stack nobody else can read.',
  },
  {
    index: '04',
    title: 'Support that answers',
    copy: 'Defined response times and a named engineer who knows your system, from a team that is still here next year.',
  },
];

export default function WhyNanosoft() {
  return (
    <section id="why" className="bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono text-accent">03 — Why Nanosoft</p>
            <h2 className="mt-6 font-heading text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.03] tracking-[-0.01em]">
              Built by engineers
              <br />
              who stay.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/60">
              Agencies hand you a slide deck and disappear. Nanosoft is a small senior studio: the same
              people scope the work, ship it and stand behind it in production — with the discipline of a
              consultancy and the pace of a product team.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-t border-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle) => (
            <article
              key={principle.index}
              className="group border-b border-primary-foreground/15 px-0 py-8 transition-colors duration-300 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0"
            >
              <span className="label-mono text-primary-foreground/40">{principle.index}</span>
              <h3 className="mt-5 font-heading text-2xl leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/55">{principle.copy}</p>
            </article>
          ))}
        </div>

        <a
          href="#contact"
          className="label-mono group mt-16 inline-flex items-center gap-3 border-b border-primary-foreground/30 pb-2 text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Talk to the team that builds it
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}