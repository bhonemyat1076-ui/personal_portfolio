"use client";

import React, { useState } from "react";

export default function ContactForm() {
  // Status states to handle smooth user feedback alerts
  const [status, setStatus] = useState<"IDLE" | "PENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("PENDING");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
formData.append("access_key", web3Key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("SUCCESS");
        formElement.reset(); // Safely clears the inputs out on successful mail delivery
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("ERROR");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email Field Wrapper */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Name input */}
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-400 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 bg-zinc-100 text-xs text-zinc-600 dark:bg-slate-700 dark:text-zinc-100 
              dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:bg-zinc-200 dark:hover:bg-slate-700 transition-colors"
            />
          </div>

          {/* Email input */}
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-400 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="type"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="mt-1 w-full px-4 py-2 bg-zinc-100 text-xs text-zinc-600 dark:bg-slate-700 dark:text-zinc-100 
              dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:bg-zinc-200 dark:hover:bg-slate-700 transition-colors"
            />
          </div>
        </div>

        {/* Message input */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-gray-400 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="mt-1 w-full px-4 py-2 text-xs bg-zinc-100 text-zinc-600 dark:bg-slate-700 
            dark:text-zinc-100 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:bg-zinc-200 dark:hover:bg-slate-700 transition-colors resize-none"
          ></textarea>
        </div>

        {/* Feedback Alert States */}
        {status === "SUCCESS" && (
          <p className="text-xs font-medium text-emerald-500 dark:text-emerald-400 transition-all">
            ✓ Message sent successfully! I will get back to you shortly.
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-xs font-medium text-rose-500 dark:text-rose-400 transition-all">
            ✕ Something went wrong. Please check your inputs or try again.
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "PENDING"}
          className="w-full flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold py-2 px-4 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "PENDING" ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}