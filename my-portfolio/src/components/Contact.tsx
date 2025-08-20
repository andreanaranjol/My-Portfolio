"use client";

import { useState } from "react";
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch {
      setStatus("❌ An error occurred.");
    }
  };

  return (
    <SectionWrapper id="contact" className="px-6 py-16">
      <section id="contact" className="px-6 max-w-2xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-heading font-semibold mb-4 text-accent-primary">Contact Me</h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl bg-surface border border-border-muted text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:shadow-lg focus:shadow-accent-primary/30 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl bg-surface border border-border-muted text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:shadow-lg focus:shadow-accent-primary/30 transition"
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-3 rounded-xl bg-surface border border-border-muted text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:shadow-lg focus:shadow-accent-primary/30 transition"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-hover transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-text-secondary text-center">{status}</p>
          )}
        </form>
      </section>
    </SectionWrapper>
  );
}
