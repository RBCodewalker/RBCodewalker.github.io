import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AccordionSection from '../components/AccordionSection';
import TabBar from '../components/TabBar';
import { contactInfo, socialLinks, formEndpoint, codeLines } from '../data/contact';
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email format';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      await fetch(formEndpoint, {
        method: 'POST',
        body: form,
      });
      setSubmitted(true);
    } catch {
      setErrors({ submit: 'Failed to send. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  const lines = codeLines(formData.name, formData.email, formData.message);

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="flex-col">
        <AccordionSection label="contacts" defaultOpen={true}>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg hover:text-heading transition-colors">
            <FaEnvelope size={14} /> {contactInfo.email.split('@')[0]}
          </a>
          <div className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg">
            <FaPhone size={14} /> {contactInfo.phone}
          </div>
        </AccordionSection>
        <AccordionSection label="find-me-also-in">
          <div className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg">
            <FaUser size={14} /> {contactInfo.name}
          </div>
          <div className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg">
            <FaMapMarkerAlt size={14} /> {contactInfo.location}
          </div>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg hover:text-heading transition-colors">
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg hover:text-heading transition-colors">
            <FaGithub size={14} /> GitHub
          </a>
        </AccordionSection>
      </Sidebar>

      {/* Mobile content */}
      <div className="md:hidden flex flex-col flex-1 overflow-hidden">
        <div className="border-b border-theme-stroke">
          <AccordionSection label="contacts" defaultOpen={false}>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-sm text-theme-fg">
              <FaEnvelope size={12} /> {contactInfo.email.split('@')[0]}
            </a>
          </AccordionSection>
        </div>
        <div className="flex-1 overflow-y-auto p-[24px]">
          {submitted ? <ThankYou onReset={resetForm} /> : (
            <ContactForm formData={formData} errors={errors} submitting={submitting} onChange={handleChange} onSubmit={handleSubmit} />
          )}
        </div>
      </div>

      {/* Desktop content */}
      <div className="hidden md:flex flex-col flex-1 overflow-hidden">
        <TabBar
          tabs={[{ id: 'contacts', label: 'contacts' }]}
          activeTab="contacts"
        />
        <div className="flex flex-1 overflow-hidden">
          {/* Left: Form */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center border-r border-theme-stroke">
            <div className="w-[372px]">
              {submitted ? <ThankYou onReset={resetForm} /> : (
                <ContactForm formData={formData} errors={errors} submitting={submitting} onChange={handleChange} onSubmit={handleSubmit} />
              )}
            </div>
          </div>
          {/* Right: Code snippet */}
          <div className="flex-1 overflow-y-auto p-[12px]">
            <div className="flex">
              <div className="flex flex-col items-end pr-[24px] select-none shrink-0">
                {lines.map((_, i) => (
                  <span key={i} className="text-body-md text-ide-slate-500 leading-[27px]">{i + 1}</span>
                ))}
              </div>
              <div className="flex flex-col">
                {lines.map((line, i) => (
                  <span key={i} className="text-body-md text-theme-fg leading-[27px] whitespace-pre">{line}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="w-[40px] flex flex-col items-center py-[12px] shrink-0">
            <div className="bg-ide-slate-500 w-[24px] h-[6px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

function ContactForm({ formData, errors, submitting, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[4px]">
        <label className="text-body-sm text-theme-fg">_name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={onChange}
          className={`bg-ide-slate-800 border rounded-ide-md px-[16px] py-[12px] text-body-md text-heading outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-theme-stroke focus:border-ide-slate-500'
          }`}
        />
        {errors.name && <span className="text-body-sm text-red-500">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-[4px]">
        <label className="text-body-sm text-theme-fg">_email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          className={`bg-ide-slate-800 border rounded-ide-md px-[16px] py-[12px] text-body-md text-heading outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-theme-stroke focus:border-ide-slate-500'
          }`}
        />
        {errors.email && <span className="text-body-sm text-red-500">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-[4px]">
        <label className="text-body-sm text-theme-fg">_message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={6}
          className={`bg-ide-slate-800 border rounded-ide-md px-[16px] py-[12px] text-body-md text-heading outline-none resize-none transition-colors ${
            errors.message ? 'border-red-500' : 'border-theme-stroke focus:border-ide-slate-500'
          }`}
        />
        {errors.message && <span className="text-body-sm text-red-500">{errors.message}</span>}
      </div>
      {errors.submit && <span className="text-body-sm text-red-500">{errors.submit}</span>}
      <button
        type="submit"
        disabled={submitting}
        className="bg-primary text-primary-inv text-body-sm px-[12px] py-[10px] rounded-ide-md w-fit hover:brightness-110 transition-all disabled:opacity-50"
      >
        {submitting ? 'sending...' : 'submit-message'}
      </button>
    </form>
  );
}

function ThankYou({ onReset }) {
  return (
    <div className="flex flex-col items-center gap-[24px] text-center">
      <h2 className="text-heading-h4 text-heading">Thank you!</h2>
      <p className="text-body-lg text-theme-fg max-w-[372px]">
        Your message has been accepted. You will receive an answer soon!
      </p>
      <button
        onClick={onReset}
        className="bg-primary text-primary-inv text-body-sm px-[12px] py-[10px] rounded-ide-md hover:brightness-110 transition-all"
      >
        send-new-message
      </button>
    </div>
  );
}

export default Contact;
