import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Why Nanosoft', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 bg-accent" />
          <span className="label-mono text-primary-foreground">Nanosoft</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono text-primary-foreground/55 transition-colors duration-300 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="label-mono border border-primary-foreground/25 px-5 py-2.5 text-primary-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          className="text-primary-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="label-mono border-b border-primary-foreground/10 py-4 text-primary-foreground/70"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}