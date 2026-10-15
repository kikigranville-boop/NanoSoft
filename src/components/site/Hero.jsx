import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const WORDS = ['AI,', 'Software,', 'Innovation,'];
const BANDS = ['30%', '38%', '33%'];
const FOCUS = ['AI & data systems', 'Custom software', 'IT consulting'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % WORDS.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-primary pb-12 pt-28 text-primary-foreground"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden border-l border-border bg-background lg:block"
        animate={{ width: BANDS[index] }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex h-full items-center justify-center">
          <span className="label-mono [writing-mode:vertical-rl] text-muted-foreground">
            Nanosoft · Engineering studio
          </span>
        </div>
      </motion.div>

      <div className="relative mx-auto flex min-h-[calc(100svh-10rem)] max-w-[1440px] flex-col justify-between gap-16 px-6 lg:px-12">
        <div className="lg:max-w-[54%]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="label-mono text-accent"
          >
            Nanosoft
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-heading text-[clamp(3.25rem,9.5vw,7.5rem)] leading-[1.02] tracking-[-0.01em]"
          >
            <span className="sr-only">Nanosoft — AI, Software, Innovation, The right way.</span>
            <span aria-hidden="true" className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
              <motion.span
                className="block"
                animate={{ y: `-${(index * 100) / WORDS.length}%` }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {WORDS.map((word) => (
                  <span key={word} className="block h-[1.15em] whitespace-nowrap leading-[1.15em]">
                    {word}
                  </span>
                ))}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-1 font-body text-[clamp(1.75rem,4vw,3rem)] font-light tracking-[-0.03em] text-primary-foreground/85"
          >
            The right way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/60"
          >
            We design, build and run intelligent systems for companies that can't afford guesswork —
            AI and data, custom software, and the consulting that keeps it all standing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="label-mono group inline-flex items-center gap-3 bg-accent px-7 py-4 text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="label-mono inline-flex items-center gap-3 border border-primary-foreground/25 px-7 py-4 text-primary-foreground/80 transition-colors duration-300 hover:border-primary-foreground/60 hover:text-primary-foreground"
            >
              See services
            </a>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-6 lg:max-w-[54%]">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {FOCUS.map((item, position) => (
              <a
                key={item}
                href="#services"
                className="label-mono flex items-center gap-3 text-primary-foreground/55 transition-colors duration-300 hover:text-primary-foreground"
              >
                <span className="text-accent">{`0${position + 1}`}</span>
                {item}
              </a>
            ))}
            <span className="label-mono ml-auto hidden items-center gap-2 text-primary-foreground/35 md:flex">
              <ArrowDown className="h-3.5 w-3.5" />
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}