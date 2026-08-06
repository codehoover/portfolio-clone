import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section
      id="contactme"
      className="py-24 px-6 max-w-2xl mx-auto bg-white dark:bg-darkbg text-[#1f1d1d] dark:text-white"
    >
      <p className="section-subheading text-green">Contact Me</p>
      <h2 className="section-heading">Let&apos;s talk</h2>
      <p className="opacity-80 mt-4 mb-10 leading-relaxed">
        I&apos;m interested in work opportunities and connecting with
        likeminded individuals. If you have any questions regarding my
        portfolio or want to connect feel free to reach me below!
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 bg-black/5 dark:bg-white/10 outline-none focus:ring-2 focus:ring-blue transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 bg-black/5 dark:bg-white/10 outline-none focus:ring-2 focus:ring-blue transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 bg-black/5 dark:bg-white/10 outline-none focus:ring-2 focus:ring-blue transition resize-none"
            placeholder="Say hello..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-3 rounded-full font-semibold text-white bg-red hover:bg-blue transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "S e n d !"}
        </button>

        {status === "success" && (
          <p className="text-green font-medium">
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red font-medium">{errorMsg}</p>
        )}
      </form>
    </section>
  );
}
