"use client";

import { useForm, ValidationError } from "@formspree/react";
import Card from "../ui/Card";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xljrrbjd");

  if (state.succeeded) {
    return (
      <Card className="rounded-[32px] p-5 lg:p-8">
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3BFF8A]/10 lg:h-16 lg:w-16">
            <span className="text-3xl">✅</span>
          </div>

          <h2 className="mt-5 text-xl font-bold text-[#3BFF8A] lg:text-3xl">
            Message Sent!
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-400 lg:mt-4 lg:text-base">
            Thank you for reaching out. I have received your message and will
            get back to you as soon as possible.
          </p>

        </div>
      </Card>
    );
  }

  return (
    <Card className="rounded-[32px] p-5 lg:p-8">

      <h2 className="text-xl font-bold text-white lg:text-2xl">
        Send a Message
      </h2>

      <p className="mt-2 text-sm leading-7 text-slate-400 lg:mt-3 lg:text-base">
        Have a project, opportunity or question? Fill out the form below and
        I'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4 lg:mt-8 lg:space-y-6"
      >

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#3BFF8A]/40 focus:ring-2 focus:ring-[#3BFF8A]/10 lg:px-5 lg:py-4"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#3BFF8A]/40 focus:ring-2 focus:ring-[#3BFF8A]/10 lg:px-5 lg:py-4"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Write your message..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#3BFF8A]/40 focus:ring-2 focus:ring-[#3BFF8A]/10 lg:px-5 lg:py-4"
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />

        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-2xl bg-[#3BFF8A] px-8 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#2DE978] disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto lg:py-4"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

      </form>

    </Card>
  );
}