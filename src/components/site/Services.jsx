import ServiceRow from '@/components/site/ServiceRow';

const SERVICES = [
  {
    index: '01',
    title: 'AI & data services',
    copy: 'Models that earn their place in the business: assistants your team actually uses, document and vision pipelines, forecasting, and the data foundations underneath them.',
    items: ['LLM systems', 'Computer vision', 'Data platforms', 'MLOps', 'Evaluation'],
    image: 'https://media.base44.com/images/public/6ad0d18805dec4eb4035bedd/feb5533fd_generated_image.png',
    imageAlt: 'Macro detail of silicon wafer circuitry',
    reversed: false,
  },
  {
    index: '02',
    title: 'Custom software development',
    copy: 'Web and mobile platforms built to your process, not bent around a template — from a single internal tool to a customer-facing product with real traffic.',
    items: ['Web platforms', 'Mobile apps', 'APIs & integrations', 'Cloud infrastructure'],
    image: 'https://media.base44.com/images/public/6ad0d18805dec4eb4035bedd/b1d71aec4_generated_image.png',
    imageAlt: 'Symmetrical glass facade of a modern tower',
    reversed: true,
  },
  {
    index: '03',
    title: 'IT consulting & support',
    copy: 'A clear-eyed read on what you already run: architecture and security reviews, a roadmap you can fund, and ongoing support from engineers who know the system.',
    items: ['Architecture audit', 'Security review', 'Cloud migration', 'Managed support'],
    image: 'https://media.base44.com/images/public/6ad0d18805dec4eb4035bedd/9b8367047_generated_image.png',
    imageAlt: 'Vast minimal server corridor in cool light',
    reversed: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-mono text-accent">01 — Services</p>
            <h2 className="mt-6 font-heading text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.03] tracking-[-0.01em]">
              Three disciplines,
              <br />
              one standard.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              Most companies we meet need more than one of these, and the seams between them are where
              projects usually fail. We run all three under one roof so nothing gets handed over broken.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border lg:mt-24">
          {SERVICES.map((service) => (
            <ServiceRow key={service.index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}