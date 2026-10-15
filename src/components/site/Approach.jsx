import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const STEPS = [
  {
    index: '01',
    title: 'Discovery',
    copy: 'We start inside your business, not your backlog. Interviews, systems audit and a hard look at the data you already have — so the plan is built on reality.',
    items: ['Stakeholder interviews', 'Systems audit', 'Success metrics'],
  },
  {
    index: '02',
    title: 'Architecture',
    copy: 'Before production code, you get a written architecture: data model, integrations, delivery risks and a fixed scope with a number attached to it.',
    items: ['Solution design', 'Data model', 'Fixed-scope estimate'],
  },
  {
    index: '03',
    title: 'Build & deploy',
    copy: 'Senior engineers ship in short cycles you can watch. Every release is tested, observable and reversible — no big-bang launches.',
    items: ['Two-week cycles', 'Automated testing', 'Zero-downtime release'],
  },
  {
    index: '04',
    title: 'Operate',
    copy: 'Launch is the midpoint. We monitor, tune and train your team, then hand over a documented system you fully own.',
    items: ['Monitoring & alerts', 'Team enablement', 'Documented handover'],
  },
];

export default function Approach() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 65%'] });
  const scanLine = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section id="approach" className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="label-mono text-accent">02 — Approach</p>
              <h2 className="mt-6 font-heading text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.03] tracking-[-0.01em]">
                Four stages.
                <br />
                No shortcuts.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                The same method on every engagement, whether it is one model in production or a
                platform your whole company runs on.
              </p>
            </div>
          </div>

          <div ref={trackRef} className="relative lg:col-span-8">
            <div className="absolute left-0 top-0 h-full w-px bg-border" />
            <motion.div
              style={{ scaleY: scanLine }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
            />
            <div className="space-y-12 pl-8 lg:pl-14">
              {STEPS.map((step) => (
                <article key={step.index} className="border-b border-border pb-12 last:border-0 last:pb-0">
                  <span className="label-mono text-muted-foreground">{step.index}</span>
                  <h3 className="mt-4 font-heading text-3xl tracking-[-0.01em] sm:text-4xl">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{step.copy}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {step.items.map((item) => (
                      <li key={item} className="label-mono border border-border px-3 py-1.5 text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}