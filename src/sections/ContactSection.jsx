import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, LoaderCircle, X } from 'lucide-react';
import SocialGraphic from '../components/SocialIcon';

const EMAILJS_SERVICE_ID = 'service_5h5b8qg';
const EMAILJS_TEMPLATE_ID = 'template_a05wjun';
const EMAILJS_PUBLIC_KEY = 'D3ovWYL2zw3ARlBrN';

function SocialIcon({ href, name, onUnavailable }) {
  const className = 'social-control flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:-translate-y-1';
  if (!href || href === '#') return <button type="button" data-unavailable="true" aria-label={`${name} — link not available yet`} onClick={() => onUnavailable(`${name} link is not available yet. You can contact me by email.`)} className={className}><SocialGraphic name={name} /></button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={className}><SocialGraphic name={name} /></a>;
}

export default function ContactSection() {
  const [notice, setNotice] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    if (!formStatus.type || formStatus.type === 'sending') return undefined;
    const timeout = window.setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    return () => window.clearTimeout(timeout);
  }, [formStatus]);
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      setFormStatus({ type: 'error', message: 'Please complete all fields.' });
      return;
    }
    setIsSending(true);
    setFormStatus({ type: 'sending', message: 'Sending your message...' });
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, email, message }, EMAILJS_PUBLIC_KEY);
      form.reset();
      setFormStatus({ type: 'success', message: 'Message sent successfully. Thank you for reaching out!' });
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setFormStatus({ type: 'error', message: 'We could not send your message. Please try again or email habibunayka@gmail.com directly.' });
    } finally {
      setIsSending(false);
    }
  }
  return (
    <section id="contacts" aria-labelledby="contact-heading" className="contact-section section-space relative bg-white flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="contact-backdrop" aria-hidden="true">
        <img src="/assets/background-contact.svg" alt="" loading="lazy" decoding="async" className="contact-backdrop-art" />
      </div>
      <div className="section-shell relative z-10">
        <div className="w-full max-w-6xl mx-auto rounded-[40px] bg-[#FFA11350] p-2 shadow-xl">
          <div className="contact-inner relative grid grid-cols-1 lg:grid-cols-2 rounded-[36px] backdrop-blur-xl">
            <div className="flex flex-col justify-between">
              <div>
                <h2 id="contact-heading" data-reveal="up" className="section-title font-extrabold font-baloo leading-none text-stroke-white mb-8 text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}>My Social Media</h2>
                <p data-reveal="up" style={{ '--reveal-delay': '80ms' }} className="contact-description mt-2 text-base md:text-xl mb-6 font-semibold font-baloo">I’m open to being contacted and will use the information you provide to connect with you and discuss ideas, projects, or collaboration opportunities.</p>
                <p data-reveal="up" style={{ '--reveal-delay': '160ms' }} className="contact-description contact-email font-semibold font-baloo text-base md:text-xl">Email: <a className="underline underline-offset-4" href="mailto:habibunayka@gmail.com">habibunayka@gmail.com</a></p>
              </div>
              <div data-reveal="up" className="contact-socials mt-6 flex">
                {[
                  { name: 'github', href: 'https://github.com/habibunayka' },
                  { name: 'linkedin', href: 'https://www.linkedin.com/in/habibunayka' },
                  { name: 'instagram', href: 'https://www.instagram.com/habib.yet' },
                  { name: 'facebook', href: 'https://www.facebook.com/mahiruxchan' },
                ].map(({ name, href }) => <SocialIcon key={name} href={href} name={name} onUnavailable={setNotice} />)}
              </div>
              <p aria-live="polite" className="contact-note mt-3">{notice}</p>
            </div>
            <div data-reveal="up" style={{ '--reveal-delay': '80ms' }} className="contact-form-panel rounded-3xl bg-white/15 backdrop-blur-lg shadow-lg">
              <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4" aria-label="Contact Habib" aria-describedby="contact-help">
                <label data-reveal="up" style={{ '--reveal-delay': '80ms' }}>Name<input type="text" name="name" autoComplete="name" required maxLength={100} placeholder="Name" /></label>
                <label data-reveal="up" style={{ '--reveal-delay': '160ms' }}>Email<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="Email" /></label>
                <label data-reveal="up" style={{ '--reveal-delay': '240ms' }}>Message<textarea name="message" rows="4" required maxLength={2000} placeholder="Message" /></label>
                <button data-reveal="up" type="submit" disabled={isSending} className="mt-2 rounded-full bg-primary py-3 font-kumbh font-semibold text-amber-950 shadow-sm hover:shadow-lg disabled:cursor-wait disabled:opacity-60">
                  {isSending ? 'Sending...' : 'Send message'}
                </button>
                <p id="contact-help" className="contact-note">Your message will be sent securely through the portfolio contact form.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {formStatus.message && <div aria-live="polite" className={`contact-status-popup ${formStatus.type}`} role="status">
        <span className="contact-status-icon" aria-hidden="true">
          {formStatus.type === 'sending' && <LoaderCircle className="contact-status-spinner" size={20} />}
          {formStatus.type === 'success' && <Check size={20} strokeWidth={3} />}
          {formStatus.type === 'error' && <strong>!</strong>}
        </span>
        <span>{formStatus.message}</span>
        {formStatus.type !== 'sending' && <button type="button" aria-label="Close notification" onClick={() => setFormStatus({ type: '', message: '' })}><X size={18} /></button>}
      </div>}
    </section>
  );
}
