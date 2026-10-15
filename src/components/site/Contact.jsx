import { useState } from 'react';
import { Loader2, ArrowUpRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SERVICES = [
  'AI & data services',
  'Custom software development',
  'IT consulting & support',
  'Not sure yet',
];

const FIELD =
  'h-12 rounded-none border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-accent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [service, setService] = useState('');
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please add your name, email and a short description of what you need.');
      return;
    }

    setState('sending');
    try {
      await base44.entities.Inquiry.create({ ...form, service: service || 'Not sure yet' });
      setState('sent');
    } catch (submitError) {
      setState('idle');
      setError('Something went wrong sending that. Please try again in a moment.');
    }
  };

  const reset = () => {
    setForm({ name: '', email: '', company: '', message: '' });
    setService('');
    setState('idle');
    setError('');
  };

  return (
    <section id="contact" className="border-t border-primary-foreground/10 bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono text-accent">04 — Contact</p>
            <h2 className="mt-6 font-heading text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.03] tracking-[-0.01em]">
              Tell us what
              <br />
              you're building.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/60">
              A short brief is enough. You will hear back from an engineer with a first read on scope,
              timeline and the fastest safe way to get started.
            </p>
            <dl className="mt-12 space-y-6 border-t border-primary-foreground/15 pt-8">
              <div>
                <dt className="label-mono text-primary-foreground/40">Response</dt>
                <dd className="mt-2 text-sm text-primary-foreground/70">Within one business day</dd>
              </div>
              <div>
                <dt className="label-mono text-primary-foreground/40">Engagements</dt>
                <dd className="mt-2 text-sm text-primary-foreground/70">
                  Fixed-scope projects, retained engineering teams, audits
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {state === 'sent' ? (
              <div className="border border-primary-foreground/20 p-10">
                <p className="label-mono text-accent">Received</p>
                <h3 className="mt-6 font-heading text-3xl tracking-[-0.01em]">Thank you.</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/60">
                  Your brief is with the team. We will come back to you within one business day.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="label-mono mt-8 border border-primary-foreground/25 px-6 py-3 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Send another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-mono text-primary-foreground/50">
                      Name
                    </label>
                    <Input id="name" value={form.name} onChange={update('name')} placeholder="Your name" className={`${FIELD} mt-3`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-mono text-primary-foreground/50">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className={`${FIELD} mt-3`}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="label-mono text-primary-foreground/50">
                      Company
                    </label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Optional"
                      className={`${FIELD} mt-3`}
                    />
                  </div>
                  <div>
                    <span className="label-mono text-primary-foreground/50">What do you need?</span>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className={`${FIELD} mt-3 w-full`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        {SERVICES.map((option) => (
                          <SelectItem key={option} value={option} className="rounded-none">
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-mono text-primary-foreground/50">
                    Brief
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="What are you trying to build or fix?"
                    className="mt-3 rounded-none border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-accent"
                  />
                </div>

                {error && <p className="text-sm text-accent">{error}</p>}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="label-mono group inline-flex w-full items-center justify-center gap-3 bg-accent px-7 py-4 text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                >
                  {state === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send brief
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}