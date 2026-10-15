const SECTIONS = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Why Nanosoft', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

const PRACTICE = ['AI & data services', 'Custom software', 'IT consulting & support'];

export default function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-accent" />
              <span className="label-mono">Nanosoft</span>
            </a>
            <p className="mt-6 max-w-sm font-heading text-2xl leading-snug text-primary-foreground/80">
              AI, Software, Innovation.
              <br />
              The right way.
            </p>
          </div>

          <nav className="lg:col-span-3">
            <p className="label-mono text-primary-foreground/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {SECTIONS.map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="text-sm text-primary-foreground/65 transition-colors duration-300 hover:text-accent"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="label-mono text-primary-foreground/40">Practice</p>
            <ul className="mt-5 space-y-3">
              {PRACTICE.map((item) => (
                <li key={item} className="text-sm text-primary-foreground/65">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-primary-foreground/40">© 2026 Nanosoft. All rights reserved.</p>
          <a href="#top" className="label-mono text-primary-foreground/40 transition-colors duration-300 hover:text-accent">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}