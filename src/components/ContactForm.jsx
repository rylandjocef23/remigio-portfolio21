import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { site } from '../data/site';

const empty = { name: '', email: '', message: '', _gotcha: '' };

const inputClass =
  'w-full rounded-lg border border-slate-400/25 bg-night/70 px-3.5 py-3 text-base text-slate-100 transition focus:border-violet-400 focus:outline-none focus:ring-3 focus:ring-violet-400/30';

const statusColor = {
  idle: '',
  sending: 'text-mist',
  success: 'text-green-300',
  error: 'text-rose-300',
};

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-mist">{label}</span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // hidden spam trap

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!site.formEndpoint) {
      // No form service configured: open the visitor's email app with everything filled in.
      const subject = `Portfolio message from ${name}`;
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'success',
        text: `Your email app should open with the message ready to send. If it doesn't, write to ${site.email}.`,
      });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending…' });
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(empty);
      setStatus({ type: 'success', text: `Message sent. Thanks, ${name}! I'll reply by email.` });
    } catch {
      setStatus({
        type: 'error',
        text: `The message didn't send. Check your connection and try again, or email ${site.email}.`,
      });
    }
  };

  return (
    <Card as="form" onSubmit={submit} className="flex flex-col gap-4 p-6 md:p-10">
      <h2 className="text-2xl font-semibold">Send a message</h2>

      <Field label="Name">
        <input className={inputClass} type="text" name="name" value={form.name} onChange={update} autoComplete="name" maxLength={80} required />
      </Field>

      <Field label="Email">
        <input className={inputClass} type="email" name="email" value={form.email} onChange={update} autoComplete="email" maxLength={120} required />
      </Field>

      <Field label="Message">
        <textarea className={`${inputClass} min-h-32 resize-y`} name="message" rows={5} value={form.message} onChange={update} maxLength={2000} required />
      </Field>

      {/* Hidden spam trap: real visitors never see or fill this. */}
      <input
        className="absolute -left-[9999px] size-px opacity-0"
        type="text"
        name="_gotcha"
        value={form._gotcha}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <Button type="submit" className="self-start" disabled={status.type === 'sending'}>
        {status.type === 'sending' ? 'Sending…' : 'Send message'}
      </Button>

      <p className={`min-h-6 text-[0.95rem] ${statusColor[status.type]}`} role="status" aria-live="polite">
        {status.text}
      </p>
    </Card>
  );
}
